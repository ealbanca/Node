const express = require('express');
const router = express.Router();

// Home route
router.use('/contacts', require('./contacts'));

module.exports = router;