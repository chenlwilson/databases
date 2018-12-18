var MessagesView = {

  $chats: $('#chats'),
  $roomname: $('.roomname'),

  initialize: function() {
    $('#chats').on('click', '.username', MessagesView.accessUserName);
  },

  renderMessage: function(username, roomname, text, createdAt) {
    _.template = $("#chats").append("<div class='chat'>" +
        "<div class='username'>" + username + "</div>" +
        "<div class = 'roomname'>" + roomname + "</div>" +
        "<div>" + text + "</div" + "<br>" +
        "<div>" + createdAt + "</div>" +
      "</div>" + "</div>"
    );
  },

  replaceMessages: function(username, roomname, text, createdAt) {
    _.template = $("#chats").append("<div class='chat'>" +
        "<div class='username'>" + username + "</div>" +
        "<div class = 'roomname'>" + roomname + "</div>" +
        "<div>" + text + "</div" + "<br>" +
        "<div>" + createdAt + "</div>" +
      "</div>" + "</div>"
    );
  },

  emptyMessages: function() {
    $('#chats').empty();
  },
  // input a username and return all their messages,
  // including username, roomname, and when it was created
  accessUserName: function (event) {
    console.log(event);
    var currentName = event.currentTarget.innerHTML;
    var length = ($('.username').length);

    for (var i = 0; i < length; i++) {
      var el = $('.username')[i];

      if (el.innerHTML === currentName) {
        $(el).css("color", "red");
      }
    }
  }
};
