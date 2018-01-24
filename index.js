var express    = require("express");
// var homepage = require('./html_files/homepage.html');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var db = require('./db');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', express.static('public'));

var firstname = "", lastname = "", username = "";

var router = express.Router();
// bloodbank route

router.get('/', function(req, res) {
    //res.json({ message: 'welcome to our upload module apis' });
    console.log('req home /');
    username = "";
        res.sendFile('./html_files/homepage.html', {root: __dirname })

});
//route to handle user registration
// router.post('/register',login.register);

router.get('/signup',function(req, res) {
  console.log("dhfhgf");
        res.sendFile('./html_files/signup.html', {root: __dirname })

});
router.get('/login',function(req, res) {
  if(username == ""){
        res.sendFile('./html_files/login.html', {root: __dirname });
  }else{
       res.sendFile('./dashboard/dashboard.html', {root: __dirname });

  }
        // var a = [{"name" : "sdfd",
        //             "class" : "ghg",
        //             "age" : "ret"},
        //             {"name" : "sdfd",
        //             "class" : "ghg",
        //             "age" : "ret"}]
        // res.render('searchrequestors', { results: a });

});
router.post('/submitLoginForm',function(req, res) {
    console.log(req.body);
  var sql = "SELECT * FROM bloodbank.user where ?? = ?";
  var inserts = ['username',req.body.inputEmail];
      sql = mysql.format(sql, inserts);
      console.log(sql);

   db.executeQuery(sql, function(err, results) {
      if(err) {
        console.log("error "+err);
        return;
      }
      console.log(results);
      if(results.length > 0 && results[0].password == req.body.inputPassword){
        console.log('true');
        firstname = results[0].firstname;
        lastname = results[0].lastname;
        username = results[0].username;
        res.sendFile('./dashboard/dashboard.html', {root: __dirname });

      }else{
        console.log('false');
        res.sendFile('./html_files/loginfailed.html', {root: __dirname });
      }
      console.log(results);
    });
      //res.send('You sent the name "' + req.body.inputEmail + '".');

});


app.use(function (req, res, next) {
  console.log('username ' + username);
  console.log('req.path '+req.path);

  if ( req.path == '/' || req.path == '/requirements'|| req.path == '/login'|| req.path == '/signup'|| req.path == '/drives'|| req.path == '/blood'|| req.path == '/vision' || req.path == '/submitLoginForm' || req.path == '/signup' || req.path == '/submitSignupForm' ) return next();

    if (username == "") {
        return res.sendFile('./html_files/login.html', {root: __dirname });
    }
    next();
});

router.post('/appscheduled',function(req, res) {
  console.log(req.body);

        res.sendFile('./dashboard/appscheduled.html', {root: __dirname })

});
router.get('/drives',function(req, res) {
        res.sendFile('./html_files/Blood_Drives.html', {root: __dirname })

});
router.get('/blood',function(req, res) {
    res.sendFile('./html_files/About_Blood.html', {root: __dirname })

});
router.get('/requirements',function(req, res) {
    res.sendFile('./html_files/requirements.html', {root: __dirname })

});
router.get('/vision',function(req, res) {
    res.sendFile('./html_files/vision.html', {root: __dirname })

});
router.get('/Requestor_Form',function(req, res) {
        res.sendFile('./html_files/Requestor_form.html', {root: __dirname })

});
router.get('/dashboard',function(req, res) {
        res.sendFile('./dashboard/dashboard.html', {root: __dirname })

});
router.get('/donor_card',function(req, res) {
        res.sendFile('./dashboard/donor_card.html', {root: __dirname })

});
router.get('/appointments',function(req, res) {
        res.sendFile('./dashboard/appointments.html', {root: __dirname })

});
router.post('/donor_card',function(req, res) {
  console.log(req.body);

        res.sendFile('./dashboard/assigndonorcard.html', {root: __dirname })

});
router.get('/signup',function(req, res) {
        res.sendFile('./html_files/signup.html', {root: __dirname })

});
router.get('/Requestor_Form',function(req, res) {
        res.sendFile('./html_files/Requestor_Form.html', {root: __dirname })

});
router.get('/Register',function(req, res) {
        res.sendFile('./html_files/register.html', {root: __dirname }) //register to donate

});
router.post('/submitReqform',function(req, res) {
  console.log(req.body);
  var sql= "INSERT INTO bloodbank.requestor(`firstname`,`lastname`,`bloodgroup`,`age`,`needdate`,`unitsblood`,`mobileno`,`hospitalname`,`location`,`email`,`streetaddress1`,`streetaddress2`,`city`,`state`,`pincode`,`purpose`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
   var inserts = [req.body.fname,req.body.sname,req.body.blood_group,req.body.age,req.body.dateneed,req.body.blood,req.body.phone,req.body.hname,req.body.lname,req.body.email,req.body.Streetaddress,req.body.Streetaddress2,req.body.City,req.body.State,req.body.pincode,req.body.pname];

  sql = mysql.format(sql, inserts);
  console.log(sql);

 db.executeQuery(sql, function(err, results) {
    if(err) {
      return;
    }
    console.log(results);
     var sql1 = "SELECT * FROM bloodbank.donor where bloodgroup = ?";
          var inserts = [req.body.blood_group];
          sql1 = mysql.format(sql1, inserts);
    db.executeQuery(sql1, function(err, results) {
        if(err) {
        return;
        }
      res.render('searchrequestors', { results: results,
                                        flag : "Receptor",
                                        flag1: "Donor"
                                    });
    });
  //res.send('You sent the name "' + req.body.fname + '".');
});

//res.sendFile('./html_files/Thankyou.html', {root: __dirname });

});
router.post('/submitDonorForm',function(req, res) {
    console.log(req.body);
    console.log(firstname + lastname);
    //req.body.phone = 43545;
    //req.body.disease != "1" && req.body.yes_hiv != "1" && req.body.bleeding1 != "1"
    //15 fields
    if(req.body.donation_blood=="it was less  than 8 weeks"||req.body.gender=="other"||req.body.yes_hiv=="Yes"||req.body.cardiacarrest=="Yes"||req.body.bleeding1=="yes"||req.body.disease=="Hepatitis"||req.body.disease=="Diabetes"||req.body.disease=="Thyroid Disorders"||req.body.disease=="Kidney Disease-stage4"||req.body.disease=="Flu"||req.body.disease=="Tendonitis"){
      res.sendFile('./dashboard/Thank_you_conditional.html', {root: __dirname });
    }//close if
    else{
      var sql = "INSERT INTO bloodbank.donor (`firstname`,`lastname`,`gender`,`phonenumber`,`bloodgroup`,`streetaddress1`,`streetaddress2`,`city`,`state`,`pincode`,`diseases`,`hiv`,`bleeding`,`allergies`,`cardiacarrest`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
      var inserts = [firstname,lastname,req.body.gender,req.body.phone,req.body.blood_group,req.body.Streetaddress,req.body.Streetaddress2,req.body.City,req.body.State,req.body.pincode,req.body.disease,req.body.yes_hiv,req.body.bleeding1,req.body.allergies,req.body.cardiacarrest];
      sql = mysql.format(sql, inserts);
      console.log(sql);
      db.executeQuery(sql, function(err, results) {
          if(err) {
            return;
          }
          console.log(results);
          var sql1 = "SELECT * FROM bloodbank.requestor where bloodgroup = ?";
          var inserts = [req.body.blood_group];
          sql1 = mysql.format(sql1, inserts);
          db.executeQuery(sql1, function(err, results) {
             if(err) {
              return;
              }
            res.render('searchrequestors', { results: results,
                                              flag : "Donor",
                                              flag1: "Receptor" });
          });
      });
    }
});
router.post('/submitRegForm',function(req, res) {
    console.log(req.body);
    var sql = "SELECT * FROM bloodbank.user";
   db.executeQuery(sql, function(err, results) {
      if(err) {
        return;
      }
      console.log(results);
      //res.send(results);
    });

      res.send('You sent the name "' + req.body.Firstname + '".');

});
router.post('/submitSignupForm',function(req, res) {
    console.log(req.body);
    firstname = req.body.firstname;
    lastname = req.body.lastname;
    var sql = "Select * from bloodbank.user where username = ? ";
    var inserts = [req.body.userid];
    sql = mysql.format(sql, inserts);
    console.log(sql);
    db.executeQuery(sql, function(err, results) {
      if(err) {
        return;
      }
      if(results.length > 0){
        return;
      }
      var sql1 = "INSERT INTO bloodbank.user (`firstname`,`lastname`,`age`,`username`,`password`) VALUES (?,?,?,?,?)";
      var inserts1 = [req.body.firstname,req.body.lastname,req.body.age,req.body.userid,req.body.psw];
      sql1 = mysql.format(sql1, inserts1);
      console.log(sql1);
      db.executeQuery(sql1, function(err, results) {
         if(err) {
           return;
         }
        console.log(results);
        res.sendFile('./dashboard/dashboard.html', {root: __dirname });
    });

    });    // res.send('th');

});


// router.get('/register',function(req, res) {
//         res.sendFile('./html_files/register.html', {root: __dirname })

// });
router.post('/assigndonorcard',function(req, res) {

  res.render('assigndonorcard', { preferredname: req.body.preferredname,
                                  date: req.body.date
                                  });

});
router.post('/donor_card',function(req, res) {
  console.log(req.body);

        res.sendFile('./dashboard/assigndonorcard.html', {root: __dirname })

});
router.get('/logout',function(req, res) {
  username = "";
  return res.sendFile('./html_files/login.html', {root: __dirname });

});
app.use('/', router);
app.listen(8081);
