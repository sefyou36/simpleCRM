// routes/invoices.js

const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/factureControllers');

// Routes pour les factures
router.get('/factures', invoiceController.getAllInvoices);
router.post('/factures', invoiceController.createInvoice);
router.put('/factures/:id', invoiceController.updateInvoice);
router.delete('/factures/:id', invoiceController.deleteInvoice);

module.exports = router;
