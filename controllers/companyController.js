// controllers/companyController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Méthode pour récupérer toutes les entreprises
const getAllCompanies = async (req, res) => {
  try {
    const companies = await prisma.tblCompany.findMany();
    res.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Could not fetch companies' });
  }
};

// Méthode pour créer une nouvelle entreprise
const createCompany = async (req, res) => {
  const { companyName, address, phoneNumber, email, vatNumber } = req.body;
  try {
    const newCompany = await prisma.tblCompany.create({
      data: {
        companyName,
        address,
        phoneNumber,
        email,
        vatNumber,
      },
    });
    res.json(newCompany);
  } catch (error) {
    console.error('Error creating company:', error);
    res.status(500).json({ error: 'Could not create company' });
  }
};

// Méthode pour récupérer une entreprise par son ID
const getCompanyById = async (req, res) => {
  const companyId = parseInt(req.params.id);
  try {
    const company = await prisma.tblCompany.findUnique({
      where: { id: companyId },
    });
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    console.error('Error fetching company:', error);
    res.status(500).json({ error: 'Could not fetch company' });
  }
};

// Méthode pour mettre à jour une entreprise
const updateCompany = async (req, res) => {
  const companyId = parseInt(req.params.id);
  const { companyName, address, phoneNumber, email, vatNumber } = req.body;
  try {
    const updatedCompany = await prisma.tblCompany.update({
      where: { id: companyId },
      data: {
        companyName,
        address,
        phoneNumber,
        email,
        vatNumber,
      },
    });
    res.json(updatedCompany);
  } catch (error) {
    console.error('Error updating company:', error);
    res.status(500).json({ error: 'Could not update company' });
  }
};

// Méthode pour supprimer une entreprise
const deleteCompany = async (req, res) => {
  const companyId = parseInt(req.params.id);
  try {
    await prisma.tblCompany.delete({
      where: { id: companyId },
    });
    res.json({ message: 'Company deleted successfully' });
  } catch (error) {
    console.error('Error deleting company:', error);
    res.status(500).json({ error: 'Could not delete company' });
  }
};

module.exports = {
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
};
