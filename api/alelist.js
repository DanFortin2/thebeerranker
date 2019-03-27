const express = require('express');
const aleRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite')

//grab all employess that are currently employed
aleRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM AleList`, (err, beers) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json( {beers: beers} );
    }
  });
});


const validateBeer = (req, res, next) => {
  const newBeer = req.body.beers;
  if(!newBeer.name || !newBeer.location || !newBeer.description) {
    return res.status(400).send();
  }
  next();
}


aleRouter.post('/', validateBeer, (req, res, next) => {
  console.log(req.body);
  const newBeer = req.body.beers;
  db.run(`INSERT INTO AleList (name, percent, ibu, description, location, imgUrl) values ($name, $percent, $ibu, $description, $location, $imgUrl)`,
  {
    $name : newBeer.name,
    $percent : newBeer.percent,
    $ibu : newBeer.ibu,
    $description : newBeer.description,
    $location : newBeer.location,
    $imgUrl : newBeer.imgUrl
  },
  function(err) {
    if(err) {
      next(err);
    }
    db.get(`SELECT * FROM AleList WHERE id = ${this.lastID}`, (err, beers) => {
      if (!beers) {
        res.status(500).send();
      }
      res.status(201).json( {beers : beers} );
    });
  });
});


module.exports = aleRouter;
