var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      let sql = 'SELECT * FROM messages';
      db.query(sql, (err, res) => {
        if (err) console.log('didnt work')
        console.log('worked!!')
        res.send('Database created...')
      })
    }, // a function which produces all the messages

    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};



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

// }