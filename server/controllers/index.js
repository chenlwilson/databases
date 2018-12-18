/*
TODO: transfer server code to each get/post functions

https://expressjs.com/en/4x/api.html#router.METHOD
router.get('/', function(req, res){
  res.send('hello world');
});
used in routes.js:
router.get('/messages', controller.messages.get);
*/

var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  messages: {
    get: function (req, res) {
      models.messages.get();
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      models.messages.post();
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

