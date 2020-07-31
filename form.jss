function validation() {
  var email = document.getElementById("email").value;
  

  if (email.indexOf("@") == -1 || email.length < 6) {
    alert("Please enter a valid email address");
    return false;
  } else {
    alert("Thanks!");
    return true;
  }
}

  


  

