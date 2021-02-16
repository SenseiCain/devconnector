const express = require('express');
const router = express.Router();

// @route    GET api/posts
// @desc     TEST route
// @access   PUBLIC
router.get('/', (req, res) => res.send('Posts base route'));

module.exports = router;