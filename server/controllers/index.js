/*
TODO: transfer server code to each get/post functions

https://expressjs.com/en/4x/api.html#router.METHOD
router.get('/', function(req, res){
  res.send('hello world');
});
used in routes.js:
router.get('/messages', controller.messages.get);
*/
console.log('hi controllers');
var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  // a function which handles a get request for all messages
  messages: {
    get: function (req, res) {
      console.log(req);
      console.log(res);
      models.messages.get(function(err, results) {
        if (err) { console.log('controller get messages didnt work'); }
        console.log(results);
        res.writeHead(200, headers);
        res.end(JSON.stringify({results: results}));
      });
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      var body = '';
      console.log('POST REQ');
      console.log(req);
      console.log('POST RES');
      console.log(res);
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', models.messages.post('CRAZY COFFEE', function(err, results) {
        if (err) { console.log('controller post message didnt work'); }
        console.log(results);
        res.writeHead(201, headers);
        res.end(JSON.stringify({results: results}));
      }));
    }
  },

  users: {
    // a function which handles a get request for all users
    get: function (req, res) {
      models.users.get();
    },

    // a function which handles posting a user to the database
    post: function (req, res) {
      models.users.post();
    }
  }
};



//controllers get/post messages/uses

//models get/post messages/users

//routes that takes controllers

//

/*
====================================
chatterbox server code:

// var obj = {
//   results: []
// }

// var requestHandler = function(request, response) {

//   if(request.url === '/classes/messages') {

//     if (request.method === 'GET' ){

//       console.log('Serving request type ' + request.method + ' for url ' + request.url);

//       var statusCode = 200;
//       var headers = defaultCorsHeaders;
//       headers['Content-Type'] = 'application/json';
//       response.writeHead(statusCode, headers);

//       var stringifiedObj = JSON.stringify(obj);
//       response.end(stringifiedObj);
//     }

//     else if(request.method === 'POST'){

//       console.log('Serving request type ' + request.method + ' for url ' + request.url);
//       console.log(request)

//       var statusCode = 201


//       var headers = defaultCorsHeaders;
//       headers['Content-Type'] = 'application/json';
//       response.writeHead(statusCode, headers);

//       let body = '';
//       //defined var data
//       //think of chunk as a dynamic, ever-changing variable like 'i' in a loop
//       //will be pushing body content into results array (which we will be stringify-ing on line 206)
//       request.on('data', chunck => {    //Joseph: uh, it's spelled "chunk"
//         body += chunck.toString();
//       })

//       request.on('end', chunck => {
//         //push parsed body to results
//         obj.results.push(JSON.parse(body));
//         console.log(obj.results); //should print ?


//         var stringifiedObj = JSON.stringify(obj);
//         // console.log(stringifiedObj);
//         // console.log(JSON.parse(stringifiedObj));
//         response._data = obj;



//         response.end(stringifiedObj);
//       })
//   }
// } else {
//     var statusCode = 404;
//     var headers = defaultCorsHeaders;
//     response.writeHead(statusCode, headers);
//     response.end();
//   }

}
*/