const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorhandler = require('errorhandler')
const apiRouter = require('./api/api');

let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');

class HandlerGenerator {
  login (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = 'password';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({username: username},
          config.secret,
          { expiresIn: '24h' // expires in 24 hours
          }
        );
        // return the JWT token for the future API calls
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }
  index (req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}

let handlers = new HandlerGenerator();

//set port to listen on 4000
const PORT = process.env.PORT || 4000;

//using middleware
app.use(cors());
app.use(bodyParser.urlencoded({ // Middleware
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('public'));
app.post('/login', handlers.login);
app.get('/test', middleware.checkToken, handlers.index);
//using apiRouter from api.js file
app.use('/api', apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


module.exports = app;
