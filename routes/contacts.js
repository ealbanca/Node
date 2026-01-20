const express = require('express');
const router = express.Router();

// Import contacts controller
const contactsController = require('../controllers/contacts');

// Define routes for contacts
router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getSingleContact);

module.exports = router;
