console.log('inside signup.js');

var valid;
function validateFields() {
  var firstname =signupform.firstname.value;
  var lastname =signupform.lastname.value;
  var age =signupform.age.value;
  var userid =signupform.userid.value;
  var psw =signupform.psw.value;
  var cpassword =signupform.cpassword.value;
  if(firstname.length == 0)
   {
     document.getElementById("firstname_errormsg").innerHTML="Enter Your First Name";
     console.log('invalid');

     valid=false;
     return valid;
  } else {
     document.getElementById("firstname_errormsg").innerHTML="";
  }
  if(lastname.length == 0 && firstname!=lastname) {
     document.getElementById("lastname_errormsg").innerHTML="Enter Your Last Name";
     console.log('invalid');

     valid=false;
          return valid;

  } else {
     document.getElementById("lastname_errormsg").innerHTML="";
  }
  if(age.length == 0) {
     document.getElementById("age_errormsg").innerHTML="Enter Your Age";
     console.log('invalid');

     valid=false;
     return valid;

  } else {
     document.getElementById("age_errormsg").innerHTML="";
  }
  if(userid.length == 0) {
     document.getElementById("userid_errormsg").innerHTML="Enter Your User id";
     console.log('invalid');

     valid=false;
          return valid;

  } else if(userid.match(/^([~`!@#$%^&*()+={}?><])$/)){
     document.getElementById("userid_errormsg").innerHTML="do not enter any special characters.";
  }
  else {
     document.getElementById("userid_errormsg").innerHTML="";
  }
  if(psw.length == 0) {
     document.getElementById("psw_errormsg").innerHTML="Enter Your Password";
     console.log('invalid');
     valid=false;
          return valid;
  } else {
     document.getElementById("psw_errormsg").innerHTML="";
  }
  if(cpassword.length == 0) {
     document.getElementById("cpassword_errormsg").innerHTML="Enter Confirm Password";
     console.log('invalid');

     valid=false;
          return valid;

  } else {
     document.getElementById("cpassword_errormsg").innerHTML="";
  }
  if(cpassword != psw) {
   document.getElementById("cpassword_errormsg").innerHTML="passwords should match";
    console.log('invalid');
    valid=false;
    return valid;

 } else {
    document.getElementById("cpassword_errormsg").innerHTML="";
 }
} //close function
function onlyAlphabets(e, t) {
          try {
              if (window.event) {
                  var charCode = window.event.keyCode;
              }
              else if (e) {
                  var charCode = e.which;
              }
              else { return true; }
              if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                  return true;
              else
                  return false;
          }
          catch (err) {
              alert(err.Description);
          }
      }
function check(form) {
console.log('check function');
  valid=true;
  validateFields();
  return valid;
}
