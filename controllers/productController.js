// controllers/productController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Méthode pour récupérer tous les produits
const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Could not fetch products' });
    }
};

// Méthode pour créer un nouveau produit
const createProduct = async (req, res) => {
  const { productName, purchasePrice, salePrice, vat } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        productName,
        purchasePrice,
        salePrice,
        vat,
      },
    });
    res.json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Could not create product' });
  }
};

// Méthode pour mettre à jour un produit
// Méthode pour mettre à jour un produit
// Méthode pour mettre à jour un produit
const updateProduct = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { productName, purchasePrice, salePrice, vat } = req.body;
  try {
      const updatedProduct = await prisma.product.update({
          where: { id: productId },
          data: {
              productName,
              purchasePrice,
              salePrice,
              vat,
          },
      });
      res.json(updatedProduct);
  } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Could not update product' });
  }
};

// Méthode pour supprimer un produit
const deleteProduct = async (req, res) => {
  const productId = parseInt(req.params.id);
  try {
      await prisma.product.delete({
          where: { id: productId },
      });
      res.json({ message: 'Product deleted successfully' });
  } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Could not delete product' });
  }
};



module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
