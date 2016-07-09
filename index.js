// Creates a variable called databaseLink that links to our database.
  var databaseLink = new Firebase('https://errandboi-f1cf5.firebaseio.com/');  
  // Create javascript variables that link our previous HTML IDs.  Remember, we can't use regular HTML inside a script tag, so we need to use JQuery to reference any previous HTML.  A $ means we are using JQuery
  var messageField = document.getElementById('task');
  var nameField = document.getElementById('name');
  var contactField = document.getElementById('contact');
  var locationField = document.getElementById('location');
  var miscField = document.getElementById('misc');
  var messageList = $('#example-messages'); // DELETE MAYBE?????
  var accountSid = 'AC713965b7bfb22cfd4658cb9ff997894a';
  var authToken = 'bfe1503835b4966d5a78e081ea5c260c';
  //alert(messageField);
  // If the enter key is pressed, push the values in the text boxes to our database.
  require(['twilio/lib']), function(twilio){
    var client = twilio(accountSid, authToken);
    function push() {
      databaseLink.push({
        name:document.getElementById('name').value, 
        task:document.getElementById('task').value,
        contact:document.getElementById('contact').value,
        location:document.getElementById('location').value,
        misc:document.getElementById('misc').value,
      });
    //require the Twilio module and create a REST client
    //Send an SMS text message
    client.sendMessage({

    to:'+13177302557', // Any number Twilio can deliver to
    from: '+13173644864', // A number you bought from Twilio and can use for outbound communication
    body: 'Requested Task' + messageField + nameField + contactField + locationField + miscField // body of the SMS message
    }, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    };
  });
  };
};
    // databaseLink.limitToLast(100).on('child_added', function (snapshot) {
    // // databaseLink.once("name","location","misc","contact","value", function (dataSnapshot){
    //   window.location.href = "sms:3177302557?body=" + messageField + nameField + contactField + locationField + miscField;
    // });