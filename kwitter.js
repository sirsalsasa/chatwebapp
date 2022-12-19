function addUser(){
    user_name = document.getElementById("user_name").value;
    if(user_name == ""){
        document.getElementById("error").innerHTML = "Please Enter User Name";
        document.getElementById("error").style.color = "red";
    }
    else{
        user_name = document.getElementById("user_name").value;
        localStorage.setItem("user_name" , user_name);
        window.location = "kwitter_room.html";
    }
}