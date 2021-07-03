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
//ADD YOUR FIREBASE LINKS HERE
Welcome= localStorage.getItem("username");
document.getElementById("Welcome").innerHTML="Welcome " + Welcome + " !";
function add_roomname()
{
      roomname= document.getElementById("add_room").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "new roomname"
      });
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row = "<div class='roomname' id=" + Room_names +" onclick='redirectToRoom(this.id)'>#" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;

      //Start code

      //End code
      });});}
getData();

function logout()
{
       window.location="index.html";
      localStorage.removeItem(Welcome);
      localStorage.removeItem(roomname);
     
}

function redirectToRoom(name)
{
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location="kwitter_page.html";
}

