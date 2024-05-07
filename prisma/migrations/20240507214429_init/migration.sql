/*
  Warnings:

  - You are about to drop the `tblproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `tblproduct`;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,
    `purchasePrice` DOUBLE NOT NULL,
    `salePrice` DOUBLE NOT NULL,
    `vat` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
