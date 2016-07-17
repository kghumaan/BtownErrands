var ref = new Firebase("https://errandboi-f1cf5.firebaseio.com");

function fbLogin(){
	ref.authWithOAuthPopup("facebook", function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});
}

function loginWithAuthData(authData) {
    username = authData.facebook.displayName;
    avatarURL = authData.facebook.cachedUserProfile.picture.data.url;
    userID = authData.facebook.id;
}
function attemptLogin() {
    var user = ref.getAuth();
    if (user) {
        loginWithAuthData(user);
    } else {
        $("#fb-login").click(function () {
            FBLogin();
        });
    }
}
$(document).ready(function () {
    attemptLogin();
});