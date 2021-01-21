const express = require('express');
const router = new express.Router();
const { handleAddContact } = require('../controllers/contact')

// NEW CONTACT 
router.post('/api/add_contact', handleAddContact)

module.exports = router;

