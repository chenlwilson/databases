var MessageView = {

  $input: $('input[class="submit"]'),
  
  initialize: function() {
    // MessageView.$input.on('click', FormView.handleSubmit);
    console.log('MessageView input ', MessageView.$input)
  },

  renderMessage: function(username, message) {
    _.template = $('#chats').prepend(`
        <div class='chat'><div class='username'>${username}</div>
        <div>${message}</div>
       </div>`
    )
  }
};
