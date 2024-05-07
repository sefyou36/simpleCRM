// routes/invoices.js

const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Routes pour les entreprises
router.get('/companies', companyController.getAllCompanies);
router.post('/companies', companyController.createCompany);
router.put('/companies/:id', companyController.updateCompany);
router.delete('/companies/:id', companyController.deleteCompany);

module.exports = router;
