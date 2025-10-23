import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log(`Iniciando o processo de seeding...`);

  // --- DEFINA OS DADOS DO PRIMEIRO ADMIN AQUI
  const adminEmail = "admin@empresa.com";
  const adminPassword = "senhaforte123";
  const adminName = "Administrador Principal";
  const adminCpf = "000.000.000-00";

  const existingAdmin = await prisma.colaborador.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log(
      `Administrador com email ${adminEmail} já existe. Pulando a criação.`
    );
  } else {
    const passwordHash = await hash(adminPassword, 8);

    const firstAdmin = await prisma.colaborador.create({
      data: {
        name: adminName,
        email: adminEmail,
        cpf: adminCpf,
        password: passwordHash,
        role: "ADMIN",
        status: "ativo",
      },
    });
    console.log(
      `Primeiro administrador criado com sucesso: ${firstAdmin.email}`
    );
  }

  console.log(`Seeding finalizado.`);
}

main()
  .catch((e) => {
    console.error("Erro durante o seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
