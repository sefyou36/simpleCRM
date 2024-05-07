// controllers/invoiceController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Méthode pour récupérer toutes les factures
const getAllInvoices = async (req, res) => {
    try {
        const invoices = await prisma.tblInvoice.findMany();
        res.json(invoices);
    } catch (error) {
        console.error('Error fetching invoices:', error);
        res.status(500).json({ error: 'Could not fetch invoices' });
    }
};

// Méthode pour créer une nouvelle facture
const createInvoice = async (req, res) => {
    const { invoiceNo, invoiceDate, dueDate, totalHT, vat, totalTTC, companyId } = req.body;
    try {
        const newInvoice = await prisma.tblInvoice.create({
            data: {
                invoiceNo,
                invoiceDate,
                dueDate,
                totalHT,
                vat,
                totalTTC,
                companyId,
            },
        });
        res.json(newInvoice);
    } catch (error) {
        console.error('Error creating invoice:', error);
        res.status(500).json({ error: 'Could not create invoice' });
    }
};

// Méthode pour mettre à jour une facture
const updateInvoice = async (req, res) => {
    const invoiceId = parseInt(req.params.id);
    const { invoiceNo, invoiceDate, dueDate, totalHT, vat, totalTTC, companyId } = req.body;
    try {
        const updatedInvoice = await prisma.tblInvoice.update({
            where: { id: invoiceId },
            data: {
                invoiceNo,
                invoiceDate,
                dueDate,
                totalHT,
                vat,
                totalTTC,
                companyId,
            },
        });
        res.json(updatedInvoice);
    } catch (error) {
        console.error('Error updating invoice:', error);
        res.status(500).json({ error: 'Could not update invoice' });
    }
};

// Méthode pour supprimer une facture
const deleteInvoice = async (req, res) => {
    const invoiceId = parseInt(req.params.id);
    try {
        await prisma.tblInvoice.delete({
            where: { id: invoiceId },
        });
        res.json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        console.error('Error deleting invoice:', error);
        res.status(500).json({ error: 'Could not delete invoice' });
    }
};

module.exports = {
    getAllInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice,
};
