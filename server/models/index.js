//TODO: need to write out all the mysql queries

//db.connection.query returns an array of result objects
//e.g. if select * from messages,
//return [ {id: 1, created_at: ..., text: 'hi', id_users: 1, id_rooms: 2}, {id: 2, ...}, ...]

var db = require('../db');


module.exports = {

  messages: {

    // a function which produces all the messages
    get: function (callback) {
      var sqlString = 'SELECT * FROM messages';
      db.connection.query(sqlString, (err, results) => {
        if (err) { console.log('get messages didnt work'); }
        //var worked = callback(results);
        console.log('get messages worked');
        callback(results);
      });
    },

    // a function which can be used to insert a message into the database
    post: function (message, callback) {
      var sqlString = 'INSERT INTO messages (created_at, text) VALUES = ?)';
      var sqlArg = ['2018-12-18 17:00:00', message];
      db.connection.query(sqlString, sqlArg, (err, results) => {
        if (err) { console.log('post message didnt work'); }
        console.log('post message worked');
        callback(results);
      });
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

