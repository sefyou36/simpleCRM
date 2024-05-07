
const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/productController');

router.get('/products', supplierController.getAllProducts);
router.post('/products', supplierController.createProduct);
router.put('/products/:id', supplierController.updateProduct);
router.delete('/products/:id', supplierController.deleteProduct);

module.exports = router;
