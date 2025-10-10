/*
  Warnings:

  - You are about to alter the column `role` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[cpf]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `cargo` VARCHAR(191) NULL,
    ADD COLUMN `cep` VARCHAR(191) NULL,
    ADD COLUMN `cidade` VARCHAR(191) NULL,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `dataAdmissao` DATETIME(3) NULL,
    ADD COLUMN `departamento` VARCHAR(191) NULL,
    ADD COLUMN `endereco` VARCHAR(191) NULL,
    ADD COLUMN `estado` VARCHAR(191) NULL,
    ADD COLUMN `salario` DOUBLE NULL,
    ADD COLUMN `status` VARCHAR(191) NULL DEFAULT 'ativo',
    ADD COLUMN `telefone` VARCHAR(191) NULL,
    MODIFY `role` ENUM('ADMIN', 'COLABORADOR') NOT NULL DEFAULT 'COLABORADOR';

-- CreateIndex
CREATE UNIQUE INDEX `users_cpf_key` ON `users`(`cpf`);
