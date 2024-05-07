// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const invoicesRoutes = require('./routes/invoices');
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customers");
const companyRoutes = require("./routes/company");

app.use(express.json());

// Middleware pour les routes des factures
app.use('/CRM', invoicesRoutes);
app.use('/CRM', productRoutes);
app.use('/CRM', customerRoutes);
app.use("/CRM", companyRoutes);

// Route pour la page d'accueil




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
