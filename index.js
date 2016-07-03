// Creates a variable called databaseLink that links to our database.
  var databaseLink = new Firebase('https://errandboi-f1cf5.firebaseio.com/');  
  // Create javascript variables that link our previous HTML IDs.  Remember, we can't use regular HTML inside a script tag, so we need to use JQuery to reference any previous HTML.  A $ means we are using JQuery
  var messageField = $('#task');
  var nameField = $('#name');
  var contactField = $('#contact');
  var locationField = $('#location');
  var miscField = $('#misc');
  var messageList = $('#example-messages'); // DELETE MAYBE?????
  // If the enter key is pressed, push the values in the text boxes to our database.
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {                            //13 is the enter key's keycode
      if (messageField.val() == ""){                  //Ensure that an activity was entered.
        alert("Please let us know how we can help!");
      }else{
        //push data to firebase and then clear the text box
        databaseLink.push({name:nameField.val(), contact:contactField.val(), location:locationField.val(), misc:miscField.val(), task:messageField.val()});
        messageField.val('');
      }
    }
  });//end of keypress function
  // Retrieve information from our database to update the to-do list.
  databaseLink.limitToLast(100).on('child_added', function (snapshot) {
    //GET DATA
    var data = snapshot.val();
      //If there was no inputted name, return Random 196 student, else return the name that was typed.
      if (data.name == ""){
        var name = "Random 196 student: ";
      }else{
        var name = data.name + ": ";
      }
      var activity = data.text;
      //Convert the data we received from our database into tagged HTML objects.
      var messageElement = $("<p>"); //p = new paragraph
      var nameElement = $("<strong class='example-chat-name'></strong>");
      nameElement.text(name);
      messageElement.text(activity).prepend(nameElement);
      //Update HTML with entries from the database.
      messageList.append(messageElement);
      //SCROLL TO BOTTOM OF MESSAGE LIST
      messageList[0].scrollTop = messageList[0].scrollHeight;
  });