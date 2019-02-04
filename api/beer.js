const express = require('express');
const beerRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite')

//grab all employess that are currently employed
beerRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM Beers`, (err, beers) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json( {beers: beers} );
    }
  });
});


module.exports = beerRouter;
