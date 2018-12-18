//TODO: modify directory path to client

var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing

//morgan: logger middleware
//https://www.npmjs.com/package/morgan
//morgan(format, options)
//The format argument may be a string of a predefined name, etc.
//'dev' is one of the many pre-defined formats
//concise output colored by response status for development use.
//The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

//bodyParser.json(options)
//https://www.npmjs.com/package/body-parser
//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
//https://expressjs.com/en/4x/api.html#express.static
//express.static(root, [options])
//built-in middleware function in Express. It serves static files and is based on serve-static.
//The root argument specifies the root directory from which to serve static assets.
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
// app.listen = http.server.listen
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
