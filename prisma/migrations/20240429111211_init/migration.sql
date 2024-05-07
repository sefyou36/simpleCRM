-- CreateTable
CREATE TABLE `TblCompany` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `vatNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TblProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,
    `purchasePrice` DOUBLE NOT NULL,
    `salePrice` DOUBLE NOT NULL,
    `vat` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TblInvoice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `invoiceNo` VARCHAR(191) NOT NULL,
    `invoiceDate` DATETIME(3) NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `totalHT` DOUBLE NOT NULL,
    `vat` DOUBLE NOT NULL,
    `totalTTC` DOUBLE NOT NULL,
    `companyId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TblInvoiceDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `unitPrice` DOUBLE NOT NULL,
    `amount` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `invoiceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TblInvoice` ADD CONSTRAINT `TblInvoice_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `TblCompany`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TblInvoiceDetail` ADD CONSTRAINT `TblInvoiceDetail_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `TblProduct`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TblInvoiceDetail` ADD CONSTRAINT `TblInvoiceDetail_invoiceId_fkey` FOREIGN KEY (`invoiceId`) REFERENCES `TblInvoice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
