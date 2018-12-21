var roomnames = [];

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    MessageView.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner());

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data);
      // examine the response from the server request:
      for (var i = 0; i < data.length; i++) {

        if(data[i].text) {

          if((!data[i].text.includes(">")) && (!data[i].text.includes("<"))) {
            MessagesView.renderMessage(data[i].username, data[i].roomname, data[i].text, data[i].createdAt);
          }
        }
        if (data[i].roomname && roomnames.indexOf(data[i].roomname) === -1) {
          roomnames.push(data[i].roomname);
          RoomsView.renderRoom(data[i].roomname);
        }
      }      
       callback();
    });
  },

  accessRoom: function(roomName) {
    console.log(roomName.target.value);
  },
  
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
  }
};

