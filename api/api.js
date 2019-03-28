const express = require('express');
const apiRouter = express.Router();
const lagerRouter = require('./lagerlist.js');
const aleRouter = require('./alelist.js');
const pilsnerRouter = require('./pilsnerlist.js');
const stoutRouter = require('./stoutlist.js');

apiRouter.use('/lagers', lagerRouter);
apiRouter.use('/ales', aleRouter);
apiRouter.use('/pilsners', pilsnerRouter);
apiRouter.use('/stouts', stoutRouter);

module.exports = apiRouter;
