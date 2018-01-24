console.log('inside Requestor_form.js');

var valid;
function validateFields()
 {
  //var str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var fname = myform.fname.value;
  var sname = myform.sname.value;
  var dateneed=myform.dateneed.value;
  var blood=myform.blood.value;
  var lname=myform.lname.value;
  var hname=myform.hname.value;
  var email=myform.email.value;
  var streetaddr1 = myform.Streetaddress.value;
  var streetaddr2 = myform.Streetaddress2.value;
  var City = myform.City.value;
  var pincode=myform.pincode.value;
  var blood_group=myform.blood_group.value;
  var purpose=myform.pname.value;
  console.log("yoooo");

var regex = /^[a-zA-Z]*$/;
var regex1 = /^[a-zA-Z ]*$/;
  if((!regex.test(fname)&&fname.length>=2)){
     document.getElementById("error_fname").innerHTML="invalid Firstname";
     console.log('invalid');
     valid=false;
     return valid;
  }
  else {
     document.getElementById("error_fname").innerHTML="";
  }

  console.log("valid");
 if(!regex.test(sname)) {
     document.getElementById("error_sname").innerHTML="invalid lastname";
     console.log('invalid');
     valid=false;
     return valid;
  } else {
     document.getElementById("error_sname").innerHTML="";
  }

  if(dateneed==""){
     document.getElementById("error_date").innerHTML="invalid date";
     console.log('invalid');
     valid=false;
     return valid;
  } else {
    var userdate = new Date(document.getElementById("dateneed").value).toJSON().slice(0,10);
    var today = new Date().toJSON().slice(0,10);
    if(userdate < today){
      document.getElementById("error_date").innerHTML="enter a valid date";
   }
    }

  console.log("date");
  if(blood>150){
     document.getElementById("error_date").innerHTML="Too many blood units but we will do our best";
     console.log('invalid');
     valid=false;
     return valid;
  } else {
     document.getElementById("error_blood").innerHTML="";
  }


  if((!regex1.test(hname) && hname.length<4) {
     document.getElementById("error_hname").innerHTML="invalid hospitalname";
     console.log('invalid');
     valid=false;
     return valid;
  } else {
     document.getElementById("error_hname").innerHTML="";
  }
  if(!regex1.test(lname) && lname.length<=3) {
     document.getElementById("error_lname").innerHTML="invalid locationname";
     console.log('invalid');
     valid=false;
     return valid;
  } else {
     document.getElementById("error_lname").innerHTML="";
  }
  /*if(email.match(/^([a-zA-Z@_])$/) || email.length<=3) {
     document.getElementById("error_lname").innerHTML="invalid emailid";
     console.log('invalid');
     valid=false;
     return valid;
  } else {
     document.getElementById("error_lname").innerHTML="";
  }*/
  if(purpose.length<=5){
     document.getElementById("error_pname").innerHTML=" please write something more.";
     console.log('invalid');
     valid=false;
     return valid;
  } else if( purpose.match(/^([~`!@#$%^&*()_+={}?><])$/)){
     document.getElementById("error_pname").innerHTML="do not enter any special characters.";
  }
  else{
    document.getElementById("error_pname").innerHTML="";
  }

  if(!streetaddr1.match(/^([a-zA-Z 0-9 ])$/)) {
     document.getElementById("error_streetaddress").innerHTML="invalid streetaddress";
     console.log('invalid');
     valid=false;
     return valid;
  } else {
     document.getElementById("error_streetaddress").innerHTML="";
  }

  console.log(valid);
  if(!streetaddr2.match(/^([a-z0-9A-z ])$/)) {
     document.getElementById("error_streetaddressline2").innerHTML="invalid streetaddress";
     console.log('invalid');
     valid=false;
     return valid;
  } else {
     document.getElementById("error_streetaddressline2").innerHTML="";
  }

  console.log(streetaddr2);
  if(!City.match(/^([a-zA-Z -]+)$/)) {
     document.getElementById("error_City").innerHTML="Enter valid city";
     console.log('invalid');
     valid=false;
     return valid;

  } else {
   document.getElementById("error_City").innerHTML="";
  }
console.log(city);
if(!pincode=="") {
     document.getElementById("error_pincode").innerHTML="Enter valid pincode";
     console.log('invalid');
     valid=false;
     return valid;

  } else {
   document.getElementById("error_pincode").innerHTML="";
  }


    /*if(yes_hiv=="yes") {
         //document.getElementById("error_pincode").innerHTML="Sorry you cannot donate blood";
         console.log('invalid');
         valid=false;
         return valid;

      } else {
       //document.getElementById("error_pincode").innerHTML="";
     }
     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     var address = document.forms[myform].elements[email].value;
     if(reg.test(address) == false) {
        alert('Invalid Email Address');
        return false;*/
//}
}

//close validateFields function


function checkReg(form) {
    console.log('check function');
  valid=true;
  validateFields();
  return valid;
}
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


$(document).ready(function(){
  $("#q1_a_display").hide();
    $(document).on('change', 'input[name="q1_a"]', function(e){
        //do your stuff here
        console.log(e.currentTarget);
        console.log(e.currentTarget.value);
        var value = e.currentTarget.value;
        if(value == "Yes"){
          $("#q1_a_display").show();
        }else{
              $("#q1_a_display").hide();

        }
              console.log('sdfdd');
    });


});
