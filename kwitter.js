var firebaseConfig = {
    apiKey: "AIzaSyBzChMo3dOgjS9t4LRBqmMBxIEer-dMgRY",
    authDomain: "project-93-d6861.firebaseapp.com",
    databaseURL: "https://project-93-d6861-default-rtdb.firebaseio.com/",
    projectId: "project-93-d6861",
    storageBucket: "project-93-d6861.appspot.com",
    messagingSenderId: "457231660808",
    appId: "1:457231660808:web:b9cf1dae733a23c4b11ebd",
    measurementId: "G-6FV5CTR0TP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function login()
{

    username1 = document.getElementById("username").value;
   

    firebase.database().ref("/").child(username1).update({
        purpose:"New username"
    });

    localStorage.setItem("username", username1);
    //window.location="kwitter_room.html";
}
