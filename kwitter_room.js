//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBMqVUSWgl3UFcY6BMzm5HQnD3uh1QiB5o",
    authDomain: "lets-chat-web-app-111b3.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-111b3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-111b3",
    storageBucket: "lets-chat-web-app-111b3.appspot.com",
    messagingSenderId: "481888312295",
    appId: "1:481888312295:web:663e0231199b509475fb42"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
        if(room_name == ""){
            document.getElementById("error").innerHTML = "Please Enter Room Name";
            document.getElementById("error").style.color = "red";
        }
        else{
            firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
            });
            localStorage.setItem("roomname" , room_name);
            window.location = "kwitter_page.html";
            document.getElementById("error").innerHTML = "";
        }
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }