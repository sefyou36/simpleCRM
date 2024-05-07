// controllers/customerController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Méthode pour récupérer tous les clients
const getAllClients = async (req, res) => {
  try {
    const clients = await prisma.Client.findMany();
    res.json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Could not fetch clients' });
  }
};

// Méthode pour créer un nouveau client
const createClient = async (req, res) => {
    const { nom, prenom, ville, tel, email } = req.body;
    try {
      const newClient = await prisma.Client.create({
        data: {
          nom,
          prenom,
          ville,
          tel,
          email,
        },
      });
      res.json(newClient);
    } catch (error) {
      console.error('Error creating client:', error);
      res.status(500).json({ error: 'Could not create client' });
    }
  };

// Méthode pour récupérer un client par son ID
const getClientById = async (req, res) => {
  const clientId = parseInt(req.params.id);
  try {
    const client = await prisma.Client.findUnique({
      where: { ID_Client: clientId },
    });
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    console.error('Error fetching client:', error);
    res.status(500).json({ error: 'Could not fetch client' });
  }
};

// Méthode pour mettre à jour un client
const updateClient = async (req, res) => {
  const clientId = parseInt(req.params.id);
  const { nom, prenom, ville, tel, email } = req.body;
  try {
    const updatedClient = await prisma.Client.update({
      where: { ID_Client: clientId },
      data: {
        nom,
        prenom,
        ville,
        tel,
        email,
      },
    });
    res.json(updatedClient);
  } catch (error) {
    console.error('Error updating client:', error);
    res.status(500).json({ error: 'Could not update client' });
  }
};

// Méthode pour supprimer un client
const deleteClient = async (req, res) => {
  const clientId = parseInt(req.params.id);
  try {
    await prisma.Client.delete({
      where: { ID_Client: clientId },
    });
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    console.error('Error deleting client:', error);
    res.status(500).json({ error: 'Could not delete client' });
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
