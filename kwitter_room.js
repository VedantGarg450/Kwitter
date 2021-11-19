
const firebaseConfig = {
      apiKey: "AIzaSyCve-ipYdvCfeuwdGm4KbYxcZTQtSqW_1A",
      authDomain: "kwitter-3dd03.firebaseapp.com",
      databaseURL: "https://kwitter-3dd03-default-rtdb.firebaseio.com",
      projectId: "kwitter-3dd03",
      storageBucket: "kwitter-3dd03.appspot.com",
      messagingSenderId: "325635888067",
      appId: "1:325635888067:web:08e0896c7dff9c98776376"
    };
firebase.initializeApp(firebaseConfig);
var User_Name= localStorage.getItem("SaveUsername")
document.getElementById("name").innerHTML= User_Name;
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      document.getElementById("output").innerHTML+= "<div id= '"+Room_names+"' class= 'room_name' onclick= 'redirect(this.id)'>"+Room_names+"</div>"
      });});}
getData();
function Logout(){
      window.location= "index.html";
}
function add_room(){
      room_name= document.getElementById("Room_Name").value;
      localStorage.setItem("SaveRoomName", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingRoomName"
      })
      document.getElementById("Room_Name").value= "";
      window.location ="kwitter_page.html";

}
function redirect(basket){
      localStorage.setItem("SaveRoomName", basket);
      window.location= "kwitter_page.html";
}