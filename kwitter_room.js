// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyChKCQ1lwo_Wtm6MEVTkYkTBPSkbksf2Hs",
      authDomain: "kwitter3-a970a.firebaseapp.com",
      databaseURL: "https://kwitter3-a970a-default-rtdb.firebaseio.com",
      projectId: "kwitter3-a970a",
      storageBucket: "kwitter3-a970a.appspot.com",
      messagingSenderId: "893286682904",
      appId: "1:893286682904:web:747bdfb4254172325ece6d"
    };
    
    // Initialize Firebase
    firebase. initializeApp(firebaseConfig);

    function getData() 
    { firebase.database().ref("/").on('value', function(snapshot)
     { 
           document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) 
    { 
          childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); 
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row; 
      }); 
}); 
} 

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      });

      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_;page.html";
}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}

