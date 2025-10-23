# API de Gestão de Colaboradores - Projeto DNC

## 📝 Sobre o Projeto

Esta API REST foi desenvolvida como parte do desafio do curso DNC. O objetivo principal é fornecer uma solução centralizada e automatizada para o cadastro e controle de colaboradores e clientes, substituindo processos descentralizados e manuais.

A API permite o cadastro, consulta, atualização e exclusão de informações, com controle de acesso baseado em roles (funções), garantindo segurança e integridade dos dados.

**A API está disponível online e pode ser acessada através da seguinte URL:**
[https://db-colaboradores-dnc.onrender.com](https://db-colaboradores-dnc.onrender.com)

## ✨ Funcionalidades Principais

- **Cadastro de Clientes:** Rota pública para registro de novos usuários com a role `CLIENTE`.
- **Cadastro de Colaboradores/Admins:** Rota protegida, acessível apenas por administradores, para registrar novos `COLABORADOR`es ou `ADMIN`s.
- **Autenticação Segura:** Login unificado para clientes, colaboradores e admins, retornando um token JWT.
- **Autorização Baseada em Roles:** Middlewares que protegem rotas específicas para que apenas administradores logados possam acessá-las (`isAuthenticated` e `isAdmin`).
- **Gerenciamento de Colaboradores (CRUD - Admin Only):**
  - Listar todos os colaboradores, com opção de filtrar por cargo (`?cargo=...`).
  - Atualizar informações específicas (cargo, telefone, status).
  - Deletar colaboradores.
- **Tratamento de Erros Centralizado:** Middleware que captura erros da aplicação e retorna respostas padronizadas.
- **Estrutura Organizada:** Separação de responsabilidades em Controllers, Services e Repositories.

## 🚀 Tecnologias Utilizadas

- **Backend:** Node.js, Express.js
- **Banco de Dados:** MySQL
- **ORM:** Prisma
- **Autenticação:** JWT (jsonwebtoken), bcryptjs (para hash de senha)
- **Validação/Utilitários:** express-async-errors, cors, dotenv
- **Gerenciador de Pacotes:** Yarn

## 🔧 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)
- Uma instância do [MySQL](https://www.mysql.com/) rodando (localmente ou na nuvem)

## ⚙️ Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/NatanPantoja/db_colaboradores_dnc.git](https://github.com/NatanPantoja/db_colaboradores_dnc.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd db_colaboradores_dnc
    ```
3.  **Instale as dependências:**
    ```bash
    yarn install
    ```
4.  **Configure as Variáveis de Ambiente:**

    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Copie o conteúdo do arquivo `.env.example` (se existir) ou adicione as seguintes variáveis:
      ```env
      # Exemplo de .env
      DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?sslaccept=strict" # Adapte com sua URL de conexão MySQL
      JWT_SECRET="SUA_CHAVE_SECRETA_PARA_JWT_AQUI" # Crie uma chave secreta forte
      ```
    - **Importante:** Substitua `USER`, `PASSWORD`, `HOST`, `PORT`, `DATABASE_NAME` pelos dados do seu banco MySQL. Se estiver usando o Aiven, use `?sslaccept=strict` no final.

5.  **Execute as Migrations do Banco de Dados:**
    Este comando criará as tabelas (`users`, `colaboradores`) no seu banco de dados com base no `schema.prisma`.
    ```bash
    npx prisma migrate dev
    ```

## ▶️ Rodando a Aplicação (Modo Desenvolvimento)

Para iniciar o servidor em modo de desenvolvimento (com `nodemon` para reiniciar automaticamente):

```bash
yarn run dev
```
