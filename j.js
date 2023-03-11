
  function formValidate(){
var namee = document.getElementById("username").value ;
var email = document.getElementById("email").value ;
var phone = document.getElementById("phone").value ;

var error = document.getElementById("error");
var text ="";


if(namee.length <3){
  text = "please enter valid username ";
error.innerHTML=text;
return false;
}

  else if(email.indexOf("@")== -1){
    text = "please enter valid email ";
    error.innerHTML=text;
    return false;

  }
  
  else if(isNaN(phone)) {
    text = "please enter valid number ";
    error.innerHTML=text;
    return false;

  }
else {
  alert("done");
  return true;
}

}