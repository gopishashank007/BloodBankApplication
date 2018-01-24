console.log('inside login.js');

var valid;
function checkFirstname() {
  var firstname =loginform.inputPassword.value;
  if(firstname.length == 3) {
     //document.getElementById("errorFname").innerHTML="Enter Your First Name";
     console.log('invalid');

     valid=false;
  } else {
     // document.getElementById("errorFname").innerHTML="";
  }
}

function check(form) {
    console.log('check function');

  valid=true;
  checkFirstname();
  return valid;
}
