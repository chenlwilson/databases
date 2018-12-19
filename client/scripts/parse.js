var Parse = {

  server: 'http://127.0.0.1:3000/chatterbox/classes/',

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify({username: message.username, text: message.text, roomname: message.roomname}),
      contentType: 'application/json',
      success: function() {
        MessagesView.emptyMessages();
        App.fetch();
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      //data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }
};
