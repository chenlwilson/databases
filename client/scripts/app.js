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
    App.fetch(App.stopSpinner())

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data);
      // examine the response from the server request:
      for (var i = 0; i < data.results.length; i++) {

       if(data.results[i].text) {

          if((!data.results[i].text.includes(">")) && (!data.results[i].text.includes("<"))) {
            MessagesView.renderMessage(data.results[i].username, data.results[i].roomname, data.results[i].text, data.results[i].createdAt);
          }
        }
          if (data.results[i].roomname && roomnames.indexOf(data.results[i].roomname) === -1) {
           roomnames.push(data.results[i].roomname)
            RoomsView.renderRoom(data.results[i].roomname);
          }
        }      
        callback();
      });
  },

  accessRoom: function(roomName) {
    console.log(roomName.target.value)
  },
  
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
  }
};

