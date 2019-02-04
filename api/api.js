const express = require('express');
const apiRouter = express.Router();
const lagerRouter = require('./lagerlist.js');

apiRouter.use('/lagers', lagerRouter);

module.exports = apiRouter;
