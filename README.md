🚀 DB Colaboradores DNC - API REST para Gestão de RH

Uma API RESTful desenvolvida com o objetivo de modernizar a gestão de colaboradores de uma empresa de software.
O projeto utiliza Node.js e Express para o backend, MySQL como banco de dados e Prisma como ORM, garantindo uma solução robusta e escalável.

💡 Visão Geral do Projeto

Este projeto tem como objetivo centralizar e automatizar o processo de cadastro, consulta, atualização e exclusão de informações de colaboradores.
A API atua como a fonte única de verdade (Single Source of Truth) para os dados de RH, substituindo métodos manuais por uma interface segura e padronizada.

🎯 Objetivos Atendidos:

Agilidade e Eficiência: Processos de cadastro e atualização mais rápidos e automatizados.

Consistência de Dados: Redução de erros manuais e inconsistências através de validações na API.

Centralização: Criação de um sistema único e central para gestão de informações.

Escalabilidade: Arquitetura RESTful preparada para atender futuras demandas de integração.

🛠️ Tecnologias Utilizadas

A aplicação é construída com uma stack moderna e eficiente:

Backend: Node.js

Framework: Express.js

Banco de Dados: MySQL

ORM: Prisma (para acesso e gerenciamento do DB)

Gerenciador de Pacotes: Yarn

📋 Endpoints da API

A API oferece os seguintes endpoints de gestão para o recurso /api/colaboradores:

(a verificar)

Método HTTP Endpoint Descrição
POST /api/colaboradores Cadastra um novo colaborador.                                                                                                                                                          

GET /api/colaboradores Lista todos os colaboradores cadastrados.

GET /api/colaboradores/:id Retorna os detalhes de um colaborador específico.

PUT /api/colaboradores/:id Atualiza todas as informações de um colaborador.

DELETE /api/colaboradores/:id Exclui um colaborador do sistema.

🗂️ Estrutura de Arquivos

O projeto segue o padrão Controller/Service para melhor organização e separação de responsabilidades:

DB_COLABORADORES_DNC/

├── prisma/

│ └── schema.prisma # Definição do modelo de dados

├── src/

│ ├── controller/ # Lógica de processamento das requisições HTTP.

│ ├── service/ # Lógica de negócio e manipulação de dados via Prisma.

│ ├── prisma.js # Configuração do cliente Prisma.

│ ├── router.js # Definição das rotas da API.

│ └── server.js # Ponto de entrada e inicialização do servidor Express.

├── .env # Variáveis de ambiente

└── package.json # Dependências e scripts

