const express = require('express');
const pilsnerRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite')

//grab all employess that are currently employed
pilsnerRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM PilsnerList`, (err, beers) => {
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


pilsnerRouter.post('/', validateBeer, (req, res, next) => {
  console.log(req.body);
  const newBeer = req.body.beers;
  db.run(`INSERT INTO PilsnerList (name, percent, rating, description, location, imgUrl) values ($name, $percent, $rating, $description, $location, $imgUrl)`,
  {
    $name : newBeer.name,
    $percent : newBeer.percent,
    $rating : newBeer.rating,
    $description : newBeer.description,
    $location : newBeer.location,
    $imgUrl : newBeer.imgUrl
  },
  function(err) {
    if(err) {
      next(err);
    }
    db.get(`SELECT * FROM PilsnerList WHERE id = ${this.lastID}`, (err, beers) => {
      if (!beers) {
        res.status(500).send();
      }
      res.status(201).json( {beers : beers} );
    });
  });
});

pilsnerRouter.put('/:id', validateBeer, (req, res, next) => {
  const newBeer = req.body.beers;
  const beerId = req.params.id;
  db.run(`UPDATE PilsnerList SET name = $name, percent = $percent, rating = $rating, description = $description, location = $location, imgUrl = $imgUrl WHERE id = $beerId`,
  {
    $beerId : beerId,
    $name : newBeer.name,
    $percent : newBeer.percent,
    $rating : newBeer.rating,
    $description : newBeer.description,
    $location : newBeer.location,
    $imgUrl : newBeer.imgUrl
  },
  function(err) {
    if(err) {
      next(err);
    }
    db.get(`SELECT * FROM PilsnerList WHERE id = ${beerId}`, (err, beers) => {
      if (!beers) {
        res.status(500).send();
      }
      res.status(200).json( {beers : beers} );
    });
  });
});

pilsnerRouter.delete('/:id', (req, res, next) => {
  console.log(req.params.id);
  db.run(`DELETE FROM PilsnerList WHERE id = $id`,
  {
    $id : req.params.id
  },
  function(err) {
    if(err) {
      next(err);
    } else {
      res.status(204).send();
    }
  });
});


module.exports = pilsnerRouter;
