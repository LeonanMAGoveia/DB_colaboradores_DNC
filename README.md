👥 API de Gestão de Colaboradores — Projeto DNC
🧩 Sobre o Projeto

Esta API RESTful foi desenvolvida como parte do desafio do curso DNC, com o objetivo de oferecer uma solução prática e centralizada para o cadastro e gerenciamento de colaboradores e clientes.
Ela substitui processos manuais e descentralizados, garantindo segurança, automação e controle de acesso baseado em perfis (roles).

🔗 Acesse a API online:
https://db-colaboradores-dnc.onrender.com

✨ Funcionalidades

👤 Cadastro de Clientes:
Permite o registro de novos usuários com a role CLIENTE.

🧑‍💼 Cadastro de Colaboradores e Admins:
Rota protegida, acessível apenas por administradores (ADMIN).

🔐 Autenticação Segura:
Login unificado com geração de token JWT.

🧱 Autorização Baseada em Roles:
Middlewares que garantem o acesso apenas a usuários autorizados (isAuthenticated, isAdmin).

🗂️ Gerenciamento de Colaboradores (CRUD):

Listagem com filtros (ex: ?cargo=...);

Atualização de dados (cargo, telefone, status etc.);

Exclusão de registros.

⚙️ Tratamento Centralizado de Erros:
Middleware dedicado para respostas padronizadas e controle de exceções.

🧭 Arquitetura Organizada:
Estruturada em Controllers, Services e Repositories.

🛠️ Tecnologias Utilizadas
Categoria Tecnologias
Linguagem / Runtime Node.js
Framework Express.js
Banco de Dados MySQL
ORM Prisma
Autenticação JWT (jsonwebtoken), bcryptjs
Utilitários express-async-errors, cors, dotenv
Gerenciador de Pacotes Yarn
🗄️ Estrutura do Banco de Dados (Prisma)

A modelagem foi feita com o Prisma ORM, conforme o arquivo schema.prisma:

enum Role {
ADMIN
COLABORADOR
CLIENTE
}

model User {
id String @id @default(uuid())
name String
email String @unique
password String
phone String?
role Role @default(CLIENTE)
createdAt DateTime @default(now()) @map("created_at")
updatedAt DateTime @updatedAt @map("updated_at")

passwordResetToken String?
passwordResetExpires DateTime?

@@map("users")
}

model Colaborador {
id String @id @default(uuid())
name String
cpf String @unique
email String @unique
password String
avatar String?
role Role @default(COLABORADOR)
telefone String?
cargo String?
dataAdmissao DateTime?
salario Float?
status String? @default("ativo")
endereco String?
cidade String?
estado String?
cep String?
createdAt DateTime @default(now()) @map("created_at")
updatedAt DateTime @updatedAt @map("updated_at")

@@map("colaboradores")
}

⚙️ Como Executar o Projeto Localmente

# Clone o repositório

git clone https://github.com/SEU_USUARIO/DB_colaboradores_DNC.git

# Acesse a pasta

cd DB_colaboradores_DNC

# Instale as dependências

yarn install

# Configure as variáveis de ambiente

cp .env.example .env

# edite o arquivo .env com suas credenciais do banco

# Execute as migrations do Prisma

npx prisma migrate dev

# Inicie o servidor

yarn dev

💡 A API será executada em:
http://localhost:3000

🔒 Rotas Principais
Método Rota Descrição
POST /register Cadastro de cliente
POST /login Autenticação (JWT)
POST /colaboradores Cadastro de colaborador (admin)
GET /colaboradores Listagem de colaboradores
PUT /colaboradores/:id Atualização de dados
DELETE /colaboradores/:id Remoção de colaborador
📦 Estrutura de Pastas (Exemplo)
src/
├─ controllers/
├─ services/
├─ repositories/
├─ middlewares/
├─ routes/
├─ prisma/
├─ server.js
└─ app.js
