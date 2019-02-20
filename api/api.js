const express = require('express');
const apiRouter = express.Router();
const lagerRouter = require('./lagerlist.js');
const aleRouter = require('./alelist.js');
const pilsnerRouter = require('./pilsnerlist.js');
const stoutRouter = require('./stoutlist.js');

apiRouter.use('/lagers', lagerRouter);
apiRouter.use('/ales', aleRouter);
apiRouter.use('/pilsner', pilsnerRouter);
apiRouter.use('/stout', stoutRouter);

module.exports = apiRouter;
