const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

//create Beer table
db.serialize(() => {
  db.run(`drop table if exists Beers`, error => {
    if(error) {
      throw error;
    }
  });
  db.run(`
    CREATE TABLE Beers (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      imgUrl TEXT NOT NULL,
      price INTEGER NOT NULL,
    )`);
});
