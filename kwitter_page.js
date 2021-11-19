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
User_Name= localStorage.getItem("SaveUsername");
room_name= localStorage.getItem("SaveRoomName")
function SEND(){
      message= document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            Saveusername: User_Name, 
            SaveMessage: message,
            like: 0
      })
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         show_name= message_data["Saveusername"];
         show_message= message_data["SaveMessage"];
         show_like= message_data["like"];
         name_with_tag= "<h4>"+show_name+"</h4> <br>"
         message_with_tag= "<h3>"+show_message+"</h3><br>"
         btn_with_tag= "<button id='"+firebase_message_id+"' class= 'btn btn-info' onclick= 'Increase_Likes(this.id)' value= '"+show_like+"'> Likes: "+show_like+"</button>"
         document.getElementById("output").innerHTML+= name_with_tag+message_with_tag+btn_with_tag;
      } });  }); }
getData();
function Increase_Likes(message_id){
      no_likes= document.getElementById(message_id).value;
      updated_likes= Number(no_likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}
function Logout(){
      window.location= ("index.html")
}