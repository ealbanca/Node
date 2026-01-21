const express = require('express');
const router = express.Router();

// Import contacts controller
const contactsController = require('../controllers/contacts');

// Routes for contacts
//Get all contacts
router.get('/', contactsController.getAllContacts);
//Get single contact by ID
router.get('/:id', contactsController.getSingleContact);
//Post a new contact
router.post('/', contactsController.createContact);
//Update a contact by ID
router.put('/:id', contactsController.updateContact);
//Delete a contact by ID
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
