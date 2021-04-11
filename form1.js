 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCp_SGMwf9cSxVDZt9gRy7yNKVZP2teVPE",
    authDomain: "e-learn-8ca1b.firebaseapp.com",
    databaseURL: "https://e-learn-8ca1b.firebaseio.com",
    projectId: "e-learn-8ca1b",
    storageBucket: "e-learn-8ca1b.appspot.com",
    messagingSenderId: "1016148618210",
    appId: "1:1016148618210:web:aabdc7a4460f7c6c0627bb",
    measurementId: "G-R472D4C4NE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 /* firebase.analytics();*/

const auth = firebase.auth();

var user = firebase.auth().currentUser;
console.log(user);


function signUp(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("signed up");
 

}

function signIn(){

   var email = document.getElementById("email1").value;
  var password = document.getElementById("password1").value;

if (email.length==0 || password.length==0)
  {
    var error = "Invalid Email and Password!";
    alert(error);
  }
else{
  firebase.auth().signInWithEmailAndPassword(email,password).then(function()
  {
    firebase.auth().onAuthStateChanged(function(user)
      {
        console.log("signed in");
        alert("signedIn");
        window.location.replace("student1.html");
      });
    }).catch(function(error) 
    {
       alert("invalid");
    });
}
}

  /*const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Logged In " + email.value);

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    document.getElementById('first').style.display="none";
    alert("logged in successful");
  }
  else{
    alert("please register first");
  }
*/
 /* var email2 = firebase.storage().ref("email");
  var password2 = firebase.storage().ref("password");
  if (email.value==email2 && password.value==password2) {
   location.href = "teach1.html";
 }


});
}*/