// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD94XgXwDhTg5SjufDSCxiNGqVkKs1Eei4",
    authDomain: "login-authentication-test.firebaseapp.com",
    databaseURL: "https://login-authentication-test.firebaseio.com",
    projectId: "login-authentication-test",
    storageBucket: "login-authentication-test.appspot.com",
    messagingSenderId: "520023869079",
    appId: "1:520023869079:web:e888d27e73e70ac4d40bd2",
    measurementId: "G-ZSYWREN4M5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  function signUp() {
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Signed Up");
  }

  function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    window.location = 'MVCindexRegUser.html';
  }

  function signOut()    {
      auth.signOut();
      window.location = 'index.html';
  }


  // auth.onAuthStateChanged(function(user){
  //       if(user)    {
  //           var email = user.email;
  //           alert("Active User " + email);
  //           window.location = 'MVCindexRegUser.html';
  //           //is signed in
  //       } else {
  //           alert ("No Active User")
  //           //no user is signed in
  //       }

  // })