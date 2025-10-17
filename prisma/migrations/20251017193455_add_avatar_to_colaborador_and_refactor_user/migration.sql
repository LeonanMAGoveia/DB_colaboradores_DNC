/*
  Warnings:

  - You are about to drop the column `cargo` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `dataAdmissao` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `departamento` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `salario` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `users_cpf_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `cargo`,
    DROP COLUMN `cep`,
    DROP COLUMN `cidade`,
    DROP COLUMN `cpf`,
    DROP COLUMN `dataAdmissao`,
    DROP COLUMN `departamento`,
    DROP COLUMN `endereco`,
    DROP COLUMN `estado`,
    DROP COLUMN `salario`,
    DROP COLUMN `status`,
    DROP COLUMN `telefone`,
    ADD COLUMN `passwordResetExpires` DATETIME(3) NULL,
    ADD COLUMN `passwordResetToken` VARCHAR(191) NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    MODIFY `role` ENUM('ADMIN', 'COLABORADOR', 'CLIENTE') NOT NULL DEFAULT 'CLIENTE';

-- CreateTable
CREATE TABLE `colaboradores` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `role` ENUM('ADMIN', 'COLABORADOR', 'CLIENTE') NOT NULL DEFAULT 'COLABORADOR',
    `telefone` VARCHAR(191) NULL,
    `cargo` VARCHAR(191) NULL,
    `dataAdmissao` DATETIME(3) NULL,
    `salario` DOUBLE NULL,
    `status` VARCHAR(191) NULL DEFAULT 'ativo',
    `endereco` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `estado` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `colaboradores_cpf_key`(`cpf`),
    UNIQUE INDEX `colaboradores_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
