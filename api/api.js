const express = require('express');
const apiRouter = express.Router();
const beerRouter = require('./beer.js');

apiRouter.use('/beers', beerRouter);

module.exports = apiRouter;
