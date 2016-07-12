var databaseLink = new Firebase('https://errandboi-f1cf5.firebaseio.com/');
var messageField = document.getElementById('task').value;
var nameField = document.getElementById('name').value;
var contactField = document.getElementById('contact').value;
var locationField = document.getElementById('location').value;
var miscField = document.getElementById('misc').value; 

firebaseRef.once("name","location","misc","contact","value", function (dataSnapshot){
	window.location.href = "sms:3177302557?body=" + messageField + nameField + contactField + locationField + miscField;
}, function (err){
	window.location.href = "sms:3177302557?body=something went wrong";
	"Something Went Wrong";
});