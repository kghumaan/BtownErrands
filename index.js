var config = {
    apiKey: "AIzaSyCdqgGdZH8bWSMiHEM7ZoeWSNfZ04uA3Y8",
    authDomain: "errandboi-f1cf5.firebaseapp.com",
    databaseURL: "https://errandboi-f1cf5.firebaseio.com",
    storageBucket: "errandboi-f1cf5.appspot.com",
  };
  firebase.initializeApp(config);
// Creates a variable called databaseLink that links to our database.
  var databaseLink = new Firebase('https://errandboi-f1cf5.firebaseio.com/');  
  // Create javascript variables that link our previous HTML IDs.  Remember, we can't use regular HTML inside a script tag, so we need to use JQuery to reference any previous HTML.  A $ means we are using JQuery
  var messageField = $('#task');
  var nameField = $('#name');
  var contactField = $('#contact');
  var locationField = $('#location');
  var miscField = $('#misc');
  var messageList = $('#example-messages'); // DELETE MAYBE?????
  //alert(messageField);
  // If the enter key is pressed, push the values in the text boxes to our database.
  function push(){
    alert("yo");
    messageField.keypress(function (e) {
    if (e.keyCode == 13) {                            //13 is the enter key's keycode
      alert("yo");
      if (messageField.val() == ""){                  //Ensure that an activity was entered.
        alert("Please let us know how we can help!");
      }else{
        //push data to firebase and then clear the text box
        databaseLink.push({name:nameField.val(), value:messageField.val()});
        messageField.val('');
      }
    }
  }
  });//end of keypress function