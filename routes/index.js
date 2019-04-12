const express = require('express');

///
const router = express.Router();
// Routes
const homeRoutes = require('./home');

// Unsecured routes
router.use('/', homeRoutes);

module.exports = router;