const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     TEST route
// @access   PUBLIC
router.get('/', (req, res) => res.send('Auth base route'));

module.exports = router;