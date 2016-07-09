// Creates a variable called databaseLink that links to our database.
  var databaseLink = new Firebase('https://errandboi-f1cf5.firebaseio.com/');  
  // Create javascript variables that link our previous HTML IDs.  Remember, we can't use regular HTML inside a script tag, so we need to use JQuery to reference any previous HTML.  A $ means we are using JQuery
  var messageField = document.getElementById('task');
  var nameField = document.getElementById('name');
  var contactField = document.getElementById('contact');
  var locationField = document.getElementById('location');
  var miscField = document.getElementById('misc');
  var messageList = $('#example-messages'); // DELETE MAYBE?????
  
  //alert(messageField);
  // If the enter key is pressed, push the values in the text boxes to our database.

  function push() {
    databaseLink.push({
      name:document.getElementById('name').value, 
      task:document.getElementById('task').value,
      contact:document.getElementById('contact').value,
      location:document.getElementById('location').value,
      misc:document.getElementById('misc').value,
    });
    var TMClient = require(['textmagic-rest-client']);
    var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
    c.Messages.send({text: 'test message', phones:'3177302557'
    });
  }
    // databaseLink.limitToLast(100).on('child_added', function (snapshot) {
    // // databaseLink.once("name","location","misc","contact","value", function (dataSnapshot){
    //   window.location.href = "sms:3177302557?body=" + messageField + nameField + contactField + locationField + miscField;
    // });