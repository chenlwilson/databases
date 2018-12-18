//TODO: need to write out all the mysql queries

//db.connection.query returns an array of result objects
//e.g. if select * from messages,
//return [ {id: 1, created_at: ..., text: 'hi', id_users: 1, id_rooms: 2}, {id: 2, ...}, ...]

var db = require('../db');


module.exports = {

  messages: {

    // a function which produces all the messages
    get: function () {
      db.connection.query('SELECT * FROM messages', (err, results) => {
        if (err) { console.log('didnt work'); }
        console.log('worked!!');
      });
    },

    // a function which can be used to insert a message into the database
    post: function () {

    }
  },

  users: {
    // a function which produces all the users
    get: function () {

    },

    // a function which can be used to insert a user into the database
    post: function () {

    }
  }
};

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

<<<<<<< HEAD
}
*/
||||||| merged common ancestors
}
=======
// }
>>>>>>> 15b831273fa21ee3a72f33a980980c9b0f28efed
