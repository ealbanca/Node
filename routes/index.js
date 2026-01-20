const express = require('express');
const router = express.Router();


// Home route - welcome message
router.get('/', (req, res) => {
	res.send('Welcome to the Contacts API!');
});

router.use('/contacts', require('./contacts'));

module.exports = router;