var Username= ""
function login(){
    Username= document.getElementById("Login_name").value;
    localStorage.setItem("SaveUsername", Username);
    window.location= ("kwitter_room.html");
}
