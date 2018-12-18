var form = `<form action="#" id="send" method="post"><input type="text" name="message" id="message"/><input type="submit" name="submit" class="newSubmit"/></form>`;

var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.one('click', RoomsView.addRoom);
    RoomsView.$select.one('click', RoomsView.renderRoom);
    $('#rooms').on('click', '.newSubmit', RoomsView.handleSubmit);
    $('#rooms select').one('change', RoomsView.accessRoom);
  },

  renderRoom: function(roomname) {  
    _.template = $('#rooms select').append('<option>' + roomname + '</option>');
  },

  addRoom: function() {
    $('#rooms').append(form);
    RoomsView.initialize();
  },

  handleSubmit: function() {
    var roomName = $('input[type=text]').val();
    Parse.create({roomname: roomName});
  },

  accessRoom: function(roomName) {
    console.log(roomName.target.value);
    MessagesView.emptyMessages();
    // empty room
    Parse.readAll((data) => {
      for (var i = 0; i < data.results.length; i++) {
        if(data.results[i].roomname === roomName.target.value) {
          MessagesView.replaceMessages(data.results[i].username, data.results[i].roomname, data.results[i].text, data.results[i].createdAt);
        }
      }
    });
  }
};


