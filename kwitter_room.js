
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdbuLkRjWTAA85RNyXgJTxUefcLS-WNOU",
    authDomain: "kwitter-c0860.firebaseapp.com",
    projectId: "kwitter-c0860",
    storageBucket: "kwitter-c0860.appspot.com",
    messagingSenderId: "179801080849",
    appId: "1:179801080849:web:1d874b64abdde6fd991db0"
  };
   firebase.initializeApp(firebaseConfig);

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
    console.log("roomname",+Room_names);
    row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;
     });});}
     function addroom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html";
     }
getData();
function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="kwitter_page.html";
}
function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
}