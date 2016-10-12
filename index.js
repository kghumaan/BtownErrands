
// Creates a variable called databaseLink that links to our database.

      function fbLogin(){
      auth.signInWithPopup(provider).then(function(result) {
        console.log("Authenticated successfully with payload:");
        var uid = result.user.uid;
      }).catch(function(error) {
        console.log("Redirection Failed YO!", error);
      });
      };
      
      var signInWithRedirect = function() {
        window.location.assign('/widget');
      };




  // Create javascript variables that link our previous HTML IDs.  Remember, we can't use regular HTML inside a script tag, so we need to use JQuery to reference any previous HTML.  A $ means we are using JQuery
  var messageField = document.getElementById('task');
  var nameField = document.getElementById('name');
  var emailField = document.getElementById('email');
  var phoneField = document.getElementById('phone');
  var locationField = document.getElementById('location');
  var miscField = document.getElementById('misc');
  var script = document.createElement('script');
  script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
  script.type = 'text/javascript';

  // var provider = new databaseLink.auth.FacebookAuthProvider();
  // provider.addScope('user_birthday');  //OPTIONAL

  function push() {
    rootRef.push({
      name:document.getElementById('name').value, 
      task:document.getElementById('task').value,
      email:document.getElementById('email').value,
      phone:document.getElementById('phone').value,
      location:document.getElementById('location').value,
      misc:document.getElementById('misc').value,
      Urgency:document.getElementById('job').value,
    }) 
  };
    // require(['twilio'], function(twilio){
    //   var client = twilio(accountSid, authToken);
    //   client.messages.create({
    //     to: "+13177302557",
    //     from: "+13173644864",
    //     body: "There is a new highest bidder. Visit {{websiteUrl}} to place another bid. All proceeds from the silent auction will go to the Samaritian House.",
    //     mediaUrl: "http://farm2.static.flickr.com/1075/1404618563_3ed9a44a3a.jpg",
    //   }, function(err, message) {
    //     console.log(message.sid);
    //   });
    // });

  function validateForm() {
            var errormessage = "";
            if (document.getElementById('name').value == "") {
               errormessage += "Please enter your name. \n";
               document.getElementById('name').style.borderColor = "red";
            }
            if (document.getElementById('email').value != "") {
                return true;
             } else if (document.getElementById('phone').value != ""){
               return true;
            } else {
              errormessage += "Please enter a way for us to contact you. \n";
              return false;
            }
            if (document.getElementById('location').value == "") {
               errormessage += "Tell us where to come! \n";
               document.getElementById('location').style.borderColor = "red";
            }
            if (document.getElementById('task').value == "") {
               errormessage += "Tell us how we can help! \n";
               document.getElementById('task').style.borderColor = "red";
            }
            if (errormessage != "") {
               alert(errormessage);
               return false;
            }
            return true;
         };


  //   require(['twilio'],function(twilio){
  //     var client = twilio(accountSid, authToken);
  //   ref.on("child_added", function(snapshot, prevChildKey) {
  //     var newPost = snapshot.val();
  //     client.sms.messages.create({ // if "messages.create" doesnt work, try "sendMessage" or "sms.messages.create"
  //       to:'+13177302557',
  //       from:'+13173644864',
  //       body:'You got a new request: \n' + newPost.name + '\n' + newPost.task + '\n' + newPost.contact + '\n' + newPost.location + '\n' + newPost.misc,
  //     }, function(err, message) {
  //       console.log(message.sid);
  //   });
  //   });
  // });
    //require the Twilio module and create a REST client
    //Send an SMS text message
  //   client.sms.messages.create({

  //   to:'+13177302557', // Any number Twilio can deliver to
  //   from: '+13173644864', // A number you bought from Twilio and can use for outbound communication
  //   body: 'Requested Task:' + messageField + nameField + contactField + locationField + miscField // body of the SMS message
  //   }, function(err, responseData) { //this function is executed when a response is received from Twilio

  //   if (!err) { // "err" is an error received during the request, if any

  //       // "responseData" is a JavaScript object containing data received from Twilio.
  //       // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
  //       // http://www.twilio.com/docs/api/rest/sending-sms#example-1

  //       console.log(responseData.from); // outputs "+14506667788"
  //       console.log(responseData.body); // outputs "word to your mother."

  //   };
  // });
    // databaseLink.limitToLast(100).on('child_added', function (snapshot) {
    // // databaseLink.once("name","location","misc","contact","value", function (dataSnapshot){
    //   window.location.href = "sms:3177302557?body=" + messageField + nameField + contactField + locationField + miscField;
    // });