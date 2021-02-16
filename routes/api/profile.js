const express = require('express');
const router = express.Router();

// @route    GET api/profile
// @desc     TEST route
// @access   PUBLIC
router.get('/', (req, res) => res.send('Profile base route'));

module.exports = router;