var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req);
      console.log(res)
      models.messages.get()
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};



//controllers get/post messages/uses

//models get/post messages/users

//routes that takes controllers

//