const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get header from token
    const token = req.header('x-auth-token');

    // Check if token is present
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied'})
    }

    // Check if token is valid
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch(err) { 
        res.status(401).json({ msg: 'Token is not valid'})
    }
}