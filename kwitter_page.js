//YOUR FIREBASE LINKS
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

username= localStorage.getItem("username");
roomname = localStorage.getItem("roomname");


function sendMessage()
{
      message = document.getElementById("send").value;
      firebase.database().ref(roomname).push({
            name: username,
            message: message,
            like:0          
      });
      document.getElementById("send").innerHTML="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name']
      message = message_data['message']
      like = message_data['like']
      name_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
      message_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_btn = "<button class = 'btn btn-warning' id=" +firebase_message_id + " value="+ like +" onclick='update_like(id)'>";
      like_icon = "<span class='glyphicon glyphicon-thumbs-up ' >  Like : "+ like +"</span></button><hr>"
      row = name_tag + message_tag + like_btn + like_icon;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
      
getData();
function update_like(message_id)
{
      btn_id=message_id;
      likes=document.getElementById(btn_id).value;
      update_likes = Number(likes) + 1;
      firebase.database().ref(roomname).child(message_id).update({
            like: update_likes
      });
}
function logout()
{
      window.location="index.html";
      localStorage.removeItem(Welcome);
      localStorage.removeItem(roomname);
}
