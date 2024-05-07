/*
  Warnings:

  - You are about to drop the `tblinvoicedetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tblinvoicedetail` DROP FOREIGN KEY `TblInvoiceDetail_invoiceId_fkey`;

-- DropForeignKey
ALTER TABLE `tblinvoicedetail` DROP FOREIGN KEY `TblInvoiceDetail_productId_fkey`;

-- DropTable
DROP TABLE `tblinvoicedetail`;

-- CreateTable
CREATE TABLE `Client` (
    `ID_Client` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Client_tel_key`(`tel`),
    UNIQUE INDEX `Client_email_key`(`email`),
    PRIMARY KEY (`ID_Client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
