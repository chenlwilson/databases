var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', null, {
  host: '127.0.0.1',
  port: 3000,
  dialect: 'mysql'
});
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

 console.log('HI CHEN!')
/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('User', {
  username: Sequelize.STRING
});

var Room = db.define('Room', {
  roomname: Sequelize.STRING
});

var Message = db.define('Message', {
  text: Sequelize.STRING,
  id_users: {
    type: Sequelize.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  id_rooms: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Room',
      key: 'id'
    }
  }
});

console.log('this is the db')
console.log(db.models.Message)

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
// User.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return User.create({username: 'Jean Valjean'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });
module.exports = {
  messages: {
    get: function(callback) {
      console.log('get')
      User.sync()
        .then(function() {
          console.log('user sync then')
          // Now instantiate an object and save it:
          return User.create({username: 'Jean Valjean'});
        })
        .then(function() {
          // Retrieve objects from the database:
          return User.findAll({ where: {username: 'Jean Valjean'} });
        })
        .then(function(users) {
          callback(users);
          // users.forEach(function(user) {
          //   console.log('hey ')
          //   console.log(user.username + ' exists');
            
          // });
          db.close();
        })
        .catch(function(err) {
          // Handle any error in the chain
          console.error(err);
          db.close();
        });
      },
    
      post: function(message, callback) {
        console.log('message post')
        Message.sync()
          .then(function() {
            return Message.create({text: 'test sql', id_users: 1, id_rooms: 1})
          })
          .then(function() {
            console.log('success sequalize post message!');
            callback();
            db.close();
          })
          .catch(function(err) {
            console.error(err);
            db.close();
          })
      }
    },

    users: {
      post: function(user, callback) {
        console.log('access user post');
        User.sync()
          .then(function() {
            return User.create({username: 'Daria'});
          })
          .then(function() {
            console.log('success sequalize post user!');
            callback();
            db.close();
          })
          .catch(function(err) {
            callback(err);
            db.close();
          })
      }
    }
}
  
//==============================================================================  
// var db = require('../db');
// module.exports = {

//   messages: {

//     // a function which produces all the messages
//     get: function (callback) {
//       var sqlString = 'SELECT messages.*, users.username, rooms.roomname FROM messages, users, rooms WHERE messages.id_users = users.id AND messages.id_rooms = rooms.id';
//       db.connection.query(sqlString, (err, results) => {
//         if (err) {
//           console.log('get messages didnt work');
//         } else {
//         //var worked = callback(results);
//           console.log('get messages worked');
//           callback(results);
//         }
//       });
//     },

//     // a function which can be used to insert a message into the database
//     post: function (message, callback) {
//       console.log('in post model');
//       /*{
//           username: 'Valjean',
//           message: 'In mercy\'s name, three days is all I need.',
//           roomname: 'Hello'
//         }
//       */
//       var username = message.username;
//       var text = message.message;
//       var roomname = message.roomname;
//       console.log(text);
//       var sqlString = 'INSERT INTO messages (created_at, text, id_users, id_rooms) VALUES (?, ?, (SELECT id FROM users WHERE users.username = ? LIMIT 1), (SELECT id FROM rooms WHERE rooms.roomname = ? LIMIT 1))';
//       //[{id: 1}]
//       //WHERE department IN (SELECT id FROM rooms WHERE roomname = ?);
//       var sqlArg = [Date().toLocaleString(), text, username, roomname];

//       db.connection.query(sqlString, sqlArg, (err, results) => {
//         if (err) {
//           console.log('post message didnt work');
//         } else {
//           console.log('This is POST MESSAGE RESULTS: ');
//           console.log(results);
//           callback(results);
//         }
//       });
//     }
//   },
//   // var sqlString = 'INSERT INTO messages (created_at, text, id_user, id_room) VALUES (?, ?, SELECT `id` FROM users WHERE `username` = ' + username + ', SELECT `id` FROM rooms WHERE `roomname` = ' + roomname + ')';


//   users: {
//     // a function which produces all the users
//     get: function (callback) {
//       var sqlString = 'SELECT * FROM users';
//       db.connection.query(sqlString, (err, results) => {
//         if (err) {
//           console.log('get users didnt work');
//         } else {
//           console.log('get users worked');
//           callback(results);
//         }
//       });
//     },

//     // a function which can be used to insert a user into the database
//     post: function (user, callback) {
//       var sqlString = 'INSERT INTO users (username) VALUES (?)';
//       //{id: 1, username: 'Daria'}
//       //input: { username: 'Valjean' }
//       //arg = 'name'
//       var sqlArg = [user.username];
//       db.connection.query(sqlString, sqlArg, (err, results) => {
//         if (err) {
//           console.log('post user didnt work');
//         } else {
//           console.log('post user worked');
//           callback(results);
//         }
//       });
//     }
//   }
// }