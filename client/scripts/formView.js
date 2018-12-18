var FormView = {

  $form: $('input[type="submit"]'),

  initialize: function() {
    FormView.$form.on('click', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    var message = $('form')[0].elements[0].value;
    var getUsername = $('form')[0].baseURI.split('=');
    var username = getUsername[1];
    var roomname = roomnames[0];
    var createdAt = new Date();
    Parse.create({username: username, text: message, roomname: roomname, createdAt: createdAt});
    Parse.readAll();
    // Stop the browser from submitting the form    
    event.preventDefault();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};