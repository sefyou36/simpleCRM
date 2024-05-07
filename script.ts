import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.tblInvoice.create({
            data: {
                id: 1,
                invoiceNo: "12345",
                invoiceDate: new Date(),
                dueDate: new Date(),
                totalHT: 100.0,
                vat: 20.0,
                totalTTC: 120.0,
                companyId: 1,
            },
        });
        console.log("invoice created successfully.");
    } catch (error) {
        console.error("Error creating company:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((error) => {
        console.error("Error in main function:", error);
        process.exit(1);
    });
