//TODO: need to write out all the mysql queries

//db.connection.query returns an array of result objects
//e.g. if select * from messages,
//return [ {id: 1, created_at: ..., text: 'hi', id_users: 1, id_rooms: 2}, {id: 2, ...}, ...]

var db = require('../db');


module.exports = {

  messages: {

    // a function which produces all the messages
    get: function (callback) {
      var sqlString = 'SELECT messages.created_at, messages.text, users.username, rooms.roomname FROM messages, users, rooms WHERE messages.id_users = users.id AND messages.id_rooms = rooms.id';
      db.connection.query(sqlString, (err, results) => {
        if (err) {
          console.log('get messages didnt work');
        } else {
        //var worked = callback(results);
          console.log('get messages worked');
          callback(results);
        }
      });
    },

    // a function which can be used to insert a message into the database
    post: function (message, callback) {
      console.log('in post model');
      /*{
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      */
      var username = message.username;
      var text = message.message;
      var roomname = message.roomname;
      console.log(text);
      var sqlString = 'INSERT INTO messages (created_at, text, id_users, id_rooms) VALUES (?, ?, (SELECT id FROM users WHERE username = ? LIMIT 1), (SELECT id FROM rooms WHERE roomname = ?))';
      //[{id: 1}]
      //WHERE department IN (SELECT id FROM rooms WHERE roomname = ?);
      var sqlArg = [Date().toLocaleString(), text, username, roomname];

      db.connection.query(sqlString, sqlArg, (err, results) => {
        if (err) {
          console.log('post message didnt work');
        } else {
          console.log('This is POST MESSAGE RESULTS: ');
          console.log(results);
          callback(results);
        }
      });
    }
  },
  // var sqlString = 'INSERT INTO messages (created_at, text, id_user, id_room) VALUES (?, ?, SELECT `id` FROM users WHERE `username` = ' + username + ', SELECT `id` FROM rooms WHERE `roomname` = ' + roomname + ')';


  users: {
    // a function which produces all the users
    get: function (callback) {
      var sqlString = 'SELECT * FROM users';
      db.connection.query(sqlString, (err, results) => {
        if (err) {
          console.log('get users didnt work');
        } else {
          console.log('get users worked');
          callback(results);
        }
      });
    },

    // a function which can be used to insert a user into the database
    post: function (user, callback) {
      var sqlString = 'INSERT INTO users (username) VALUES (?)';
      //{id: 1, username: 'Daria'}
      //input: { username: 'Valjean' }
      //arg = 'name'
      var sqlArg = [user.username];
      db.connection.query(sqlString, sqlArg, (err, results) => {
        if (err) {
          console.log('post user didnt work');
        } else {
          console.log('post user worked');
          callback(results);
        }
      });
    }
  }
};
