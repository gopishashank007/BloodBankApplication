console.log('inside register.js');

var valid;

function validateFields() {
  var streetaddr1 = myform.Streetaddress.value;
  var streetaddr2 = myform.Streetaddress2.value;
  var City = myform.City.value;
  var pincode=myform.pincode.value;
  var blood_group=myform.blood_group.value;   //capture these values
  var donateblood=myform.donation_blood.value;  //capture these values
  var disease=myform.disease.value;
  var allergies=myform.allergies.value;
  var yeshiv=myform.yes_hiv.value;
  var regex = /^[a-zA-Z]*$/;
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

console.log(valid)
if(!pincode=="") {
     document.getElementById("error_pincode").innerHTML="Enter valid pincode";
     console.log('invalid');
     valid=false;
     return valid;

  } else {
   document.getElementById("error_pincode").innerHTML="";
  }
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
     }*/

}//close validateFields function
function checkReg(form) {
    console.log('check function');
  valid=true;
  validateFields();
  return valid;
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
