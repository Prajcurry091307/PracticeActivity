//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCAp8sXb7bGXiADklGUsOyiyT31Di-3el0",
    authDomain: "kwitter-c2f48.firebaseapp.com",
    databaseURL: "https://kwitter-c2f48-default-rtdb.firebaseio.com",
    projectId: "kwitter-c2f48",
    storageBucket: "kwitter-c2f48.appspot.com",
    messagingSenderId: "658186658179",
    appId: "1:658186658179:web:ecee3c6518770d1c5716b6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
 var user_name= document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
     purpose: "adding user"
 });
}