// routes/customers.js

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/clientController');

// Routes pour les clients
router.get('/clients', customerController.getAllClients);
router.get('/clients:id', customerController.getClientById);
router.post('/clients', customerController.createClient);
router.put('/clients/:id', customerController.updateClient);
router.delete('/clients/:id', customerController.deleteClient);

module.exports = router;
