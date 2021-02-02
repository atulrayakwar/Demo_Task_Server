const express = require('express');
const http = require('http');
// body-parser is a module that parses the request (of various content types) 
// and creates a req.body object that we can access in our routes.
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config');
const models = require('./db/models');
const cron = require('node-cron');
// create express app
const app = express();

const port = normalizePort(process.env.PORT || '5000');

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: '20mb' }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept, x-access-token");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// // serving static files in Express
// app.use('/public', express.static('public'));
// app.use(express.static('api/public/images/patientData'));
// app.use(express.static('api/public/images/patientData/Invoice'));
// app.use(express.static('api/public/images/patientOpd'));

// define a simple route
app.get('/', (req, res) => {
  res.json({ "appName": "Varselor E-commerce Server", "version": "1.0.0" });
});

// API routes for
require('./api/routes')(app);

//Implementation of authentication and authorization
const AuthController = require('./api/authentication');

app.use('/api/auth', AuthController);

app.set('port', port);

models.sequelize.sync().then(function () {
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, function () {
    console.log('Express server listening on port ' + server.address().port);

  });

  server.on('error', onError);
  server.on('listening', onListening);
});

/**
 * Normalize a port into a number, string, or false.
 * @param {*} val 
 */
function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 * @param {*} error 
 */
function onError(error) {

  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

  console.log('Listening on ' + bind);
}
