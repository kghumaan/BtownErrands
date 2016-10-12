
      var config = {
        apiKey: "AIzaSyCdqgGdZH8bWSMiHEM7ZoeWSNfZ04uA3Y8",
        authDomain: "errandboi-f1cf5.firebaseapp.com",
        databaseURL: "https://errandboi-f1cf5.firebaseio.com",
        storageBucket: "errandboi-f1cf5.appspot.com",
      };
      firebase.initializeApp(config);
      var rootRef = firebase.database().ref();
      var auth = firebase.auth();
      var provider = new firebase.auth.FacebookAuthProvider();
