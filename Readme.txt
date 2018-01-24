----------------------------------------------------------------Readme-------------------------------------------------------------------------------------------------
To run the files on the localhost,I mean on your system.

Step1: Install node-js command prompt.
step2: Install mysql and MySQL Workbench 6.2 CE or latest on your system
Step3: import the dump file to microsoft sql work bench by clicking the server option and going to data import  option and select the file.
step4:you should go to db.js file and give the following
    "host": "localhost",
    "port" : 3306,
    "user": "root",
    "password": "admin",
    "schema": "bloodbank",
    "connectionLimit":200  
in the mysql create pool function.
and comment these lines in the same file 

host: process.env.RDS_HOSTNAME,
user: process.env.RDS_USERNAME,
 password: process.env.RDS_PASSWORD,
port: process.env.RDS_PORT

the process.env variables are good enough to run on elastic beanstalk but not in local environment.

step5: Go to that particular location or directory on your system and give node index.js command.
Step6: Go to the browser and give localhost:8081 and the bloodbank web application will run on local environment.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Since the AWS has my website hosted on  elastic beanstalk.you can simply eliminate the above process and  just give the following  Url in your GoogleChrome Browser and the website should open:

		http://bloodbank-env-1.yiphffxdep.us-east-1.elasticbeanstalk.com/

The website uses rds instance::   bloodbank.ccdichi7wx9d.us-east-1.rds.amazonaws.com:3306
The website uses aws bucket(ARN):::    arn:aws:s3:::elasticbeanstalk-us-east-1-609368249878				
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------References------------------------------------------------------------------------------------
1.	https://www.slideshare.net/janglinsolamanc/b-39621175
2.	http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.container.html
3.	https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.db.html#environments-cfg-rds-create
4.	https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.RDS.html?icmpid=docs_elasticbeanstalk_console#rds-external-defaultvpc
5.	https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-nodejs.rds.html#nodejs-rds-connect
6.	https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-configuration-methods-before.html#configuration-options-before-savedconfig
7.	http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html
8.	http://www.friends2support.org/
9.	http://www.miblood.org/donation-centers/
10.	http://thebloodconnection.org/
11.	https://www.123contactform.com/free-form-templates/Blood-Donation-Form-2288715/
12.	https://www.w3schools.com/bootstrap/bootstrap_templates.asp
13.	https://startbootstrap.com/template-overviews/sb-admin/
14.	https://getbootstrap.com/
15.	http://expressjs.com/en/api.html#res
16.	https://www.cdc.gov/nchs/fastats/anemia.htm
17.	https://www.news-medical.net/health/Thalassemia-Prevalence.aspx
18.	https://codepen.io/
19.	https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
20.	https://www.npmjs.com/
21.	www.stackoverflow.com
22.	https://www.bootply.com/l1h1qhPDgn
23.	https://bootsnipp.com/
24.	https://W3schools.com
25.	http://www.w3resource.com/javascript/form/all-letters-field.php
26.	https://stackoverflow.com/questions/20783093/allowing-only-alphabets-in-text-box-using-java-script
27.     https://www.cdc.gov/nchs/fastats/anemia.htm
28.	https://www.news-medical.net/health/Thalassemia-Prevalence.aspx
29.	LucidChart for drawing use case diagrams.

---------------------------------------------------------------------------------------------------------





