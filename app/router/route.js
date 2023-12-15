const apiRouter = require('express').Router();
const controller = require('../controller/user.js');

apiRouter.get('/loginPage',controller.loginPage);
apiRouter.post('/login',controller.login);

module.exports = apiRouter;