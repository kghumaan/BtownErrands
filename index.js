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
      value:document.getElementById('name').value,
      contact:document.getElementById('contact').value,
      location:document.getElementById('location').value,
      misc:document.getElementById('misc').value
    });
  }