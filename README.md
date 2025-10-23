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
Categoria Tecnologias <br>
Linguagem / Runtime Node.js<br>
Framework Express.js<br>
Banco de Dados MySQL<br>
ORM Prisma<br>
Autenticação JWT (jsonwebtoken), bcryptjs<br>
Utilitários express-async-errors, cors, dotenv<br>
Gerenciador de Pacotes Yarn<br>
🗄️ Estrutura do Banco de Dados (Prisma)

A modelagem foi feita com o Prisma ORM, conforme o arquivo schema.prisma:

enum Role {<br>
ADMIN<br>
COLABORADOR<br>
CLIENTE<br>
}<br>

model User {<br>
id String @id @default(uuid())<br>
name String<br>
email String @unique<br>
password String<br>
phone String?<br>
role Role @default(CLIENTE)<br>
createdAt DateTime @default(now()) @map("created_at")<br>
updatedAt DateTime @updatedAt @map("updated_at")<br>

passwordResetToken String?<br>
passwordResetExpires DateTime?<br>

@@map("users")<br>
}<br>

model Colaborador {<br>
id String @id @default(uuid())<br>
name String<br>
cpf String @unique<br>
email String @unique<br>
password String<br>
avatar String?<br>
role Role @default(COLABORADOR)<br>
telefone String?<br>
cargo String?<br>
dataAdmissao DateTime?<br>
salario Float?<br>
status String? @default("ativo")<br>
endereco String?<br>
cidade String?<br>
estado String?<br>
cep String?<br>
createdAt DateTime @default(now()) @map("created_at")<br>
updatedAt DateTime @updatedAt @map("updated_at")<br>

@@map("colaboradores")<br>
}<br>

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

🔒 Rotas Principais<br>
Método Rota Descrição<br>
POST /register Cadastro de cliente<br>
POST /login Autenticação (JWT)<br>
POST /colaboradores Cadastro de colaborador (admin)<br>
GET /colaboradores Listagem de colaboradores<br>
PUT /colaboradores/:id Atualização de dados<br>
DELETE /colaboradores/:id Remoção de colaborador<br>
📦 Estrutura de Pastas (Exemplo)
src/<br>
├─ controllers/<br>
├─ services/ <br>
├─ repositories/<br>
├─ middlewares/<br>
├─ routes/<br>
├─ prisma/<br>
├─ server.js<br>
└─ app.js<br>
