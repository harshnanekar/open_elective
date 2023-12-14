const express = require('express').Router();
const controller = require('../controller/user.js');

express.get('/loginPage',controller.loginPage);
express.post('/login',controller.login);

module.exports = express;