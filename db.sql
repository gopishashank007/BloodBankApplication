CREATE DATABASE  IF NOT EXISTS `bloodbank` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bloodbank`;
-- MySQL dump 10.13  Distrib 5.6.23, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: bloodbank
-- ------------------------------------------------------
-- Server version	5.5.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `donor`
--

DROP TABLE IF EXISTS `donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donor` (
  `donorid` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `phonenumber` int(10) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `bloodgroup` varchar(45) DEFAULT NULL,
  `streetaddress1` varchar(45) DEFAULT NULL,
  `streetaddress2` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `pincode` int(7) NOT NULL,
  `diseases` varchar(45) NOT NULL,
  `hiv` varchar(45) DEFAULT NULL,
  `bleeding` varchar(45) DEFAULT NULL,
  `allergies` varchar(45) DEFAULT NULL,
  `cardiacarrest` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`donorid`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donor`
--

LOCK TABLES `donor` WRITE;
/*!40000 ALTER TABLE `donor` DISABLE KEYS */;
INSERT INTO `donor` VALUES (2,'mathews',NULL,43545,NULL,'Male','A POSITIVE','ftjuytfgliu','kyugkkjkgb',NULL,'AL',49006,'1','on',NULL,'1',NULL),(3,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(4,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(5,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(6,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(7,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(8,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(9,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(10,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(11,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(12,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(13,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(14,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(15,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(16,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(17,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(18,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(19,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(20,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(21,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(22,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(23,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(24,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(25,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(26,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(27,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(28,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(29,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(30,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(31,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(32,NULL,NULL,43545,NULL,'Male','1','','',NULL,'AL',0,'1',NULL,NULL,'1',NULL),(33,'mano','adsfdas',43545,NULL,'Gay','1','gfgjhguk','iuhyliuh',NULL,'AL',49006,'1','on','on','1',NULL),(34,'mano','adsfdas',43545,NULL,'Gay','1','gfgjhguk','iuhyliuh',NULL,'AL',49006,'1',NULL,NULL,'1',NULL),(35,'mano','adsfdas',43545,NULL,'Male','A Positive','vdssdfds','asdfdsfa',NULL,'AL',49006,'Hepatitis',NULL,NULL,'Aspirin',NULL),(36,'mano','adsfdas',43545,NULL,'Gay','A Positive','','',NULL,'AL',0,'Hepatitis',NULL,NULL,'Aspirin',NULL),(37,'mano','adsfdas',43545,NULL,'Gay','A Positive','','',NULL,'AL',0,'Hepatitis',NULL,NULL,'Aspirin',NULL),(38,'mano','adsfdas',269,NULL,'Male','B Positive','luhij','gvkjhbvk',NULL,'LA',49003,'Cholestero','no','no','Chromium','no'),(39,'mano','adsfdas',269,NULL,'Female','A Negative','sdfasd','ijijpoi',NULL,'AL',49006,'Diabetes','Yes','Yes','Pollen','Yes');
/*!40000 ALTER TABLE `donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requestor`
--

DROP TABLE IF EXISTS `requestor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `requestor` (
  `requestorid` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `needdate` varchar(45) DEFAULT NULL,
  `mobileno` int(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `purpose` varchar(45) DEFAULT NULL,
  `bloodgroup` varchar(45) DEFAULT NULL,
  `unitsblood` varchar(45) DEFAULT NULL,
  `hospitalname` varchar(45) DEFAULT NULL,
  `streetaddress1` varchar(45) DEFAULT NULL,
  `streetaddress2` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `pincode` int(7) DEFAULT NULL,
  `age` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`requestorid`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requestor`
--

LOCK TABLES `requestor` WRITE;
/*!40000 ALTER TABLE `requestor` DISABLE KEYS */;
INSERT INTO `requestor` VALUES (1,'KARTHIK','CHANDU','0000-00-00',2147483647,'','troy ','Accident','O POSITIVE','2','MICHIGAN HOSPITAL','','','','',0,'',''),(2,'MATHEWS','COLUMBUS','0000-00-00',2145689789,'','traverse city','thalassemia','A POSITIVE','3','MICHIGAN HOSITAL','','','','',0,'',''),(4,'hjgjh','jgjhkuhjl','23',269,'gopishashank007@gmail.com','ykgkjyugkuyk','jufkyujgu','A Positive','23','hgjhmfgh','nhgfjhy','hgjughikul','gjjuyhgku','AL',49006,'10',''),(5,'','','',0,'','','','A Positive','','','','','','AL',0,'',''),(6,'','','',0,'','','','A Positive','','','','','','AL',0,'',''),(7,'','','',0,'','','','A Positive','','','','','','AL',0,'',''),(8,'','','',0,'','','','A Positive','','','','','','AL',0,'',''),(9,'','','',0,'','','','A Positive','','','','','','AL',0,'',''),(10,'','','',0,'','','','A Positive','','','','','','AL',0,'',''),(11,'','','',0,'','','','A Positive','','','','','','AL',0,'',''),(12,'','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(13,'shashank','k','12/12/3333',6456,'asdfasd@gmail.com','asdfsadf','jhgfkuyfk','A Positive','18','adsfasgf','adsfas','asdfsad','asdfasd','AL',49006,'23',''),(14,'shashank','k','12/12/3333',6456,'','','','A Positive','1','ygjhgku','','','','AL',0,'23',''),(15,'shashank','k','12/12/3333',6456,'','jyhgk','','A Positive','12','yhjfmyjg','','','','AL',0,'23',''),(16,'ygu','jyhgki','12/12/3333',6456,'gfjmh@yahoo.co.in','fytgfjy','jtfhjuyfg','A Positive','23','hgfj','tyfjkyu','jyujuky','ukygku','AL',49006,'23',''),(17,'','','',0,'','','','A Positive','','','','','','AL',0,'',''),(18,'','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(19,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(20,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(21,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(22,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(23,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(24,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(25,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(26,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(27,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(28,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(29,'shashank','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(30,'','','12/12/3333',6456,'','','','A Positive','','','','','','AL',0,'',''),(31,'gkjhg','hbjhbj','12/12/2222',6455,'hgoluhlhuk@bloodbak','errgfes','thrt','0 positive',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(32,'vikas','dayananda','12/12/3333',6456,'gopi_shashank007@yahoo.co.in','kalamazoo','sadfas','A Positive','4','Borgess Medical Center','3','asdfasffg','asdf','AL',49006,'18',''),(33,'vikas','dayananda','12/12/3333',6456,'gopi_shashank007@yahoo.co.in','kalamazoo','sadfas','A Positive','4','Borgess Medical Center','3','asdfasffg','asdf','AL',49006,'18',''),(34,'vikas','dayananda','12/12/3333',6456,'gopi_shashank007@yahoo.co.in','kalamazoo','sadfas','A Positive','4','Borgess Medical Center','3','asdfasffg','asdf','AL',49006,'18',''),(35,'vikas','dayananda','12/12/3333',6456,'gopi_shashank007@yahoo.co.in','kalamazoo','sadfas','A Positive','4','Borgess Medical Center','3','asdfasffg','asdf','AL',49006,'18',''),(36,'dsafasd','asdfasd','2017-08-21',269,'gopi_shashank007@yahoo.co.in','fdgsdfg','sdfadsf','A Negative','4','frrfdsg','asdfas','asdfas','asdf','AL',49006,'23',''),(37,'mano','sdfads','2017-08-24',269,'gopi_shashank007@yahoo.co.in','dfsgsdf','gdfgdf','A Positive','8','ergfdsg','asdfas','asdfas','asdf','AL',49006,'23','');
/*!40000 ALTER TABLE `requestor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `age` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('asfdas','asfd',18,'asdfa','salvation'),('vygy','uhunu',18,'ghi','salvation'),('safa','sonia',18,'gopi_shashank007@yahoo.co.in','Aspiration123$'),('mano','adsfdas',18,'mano223@bloodbank','1'),('dsfgs','sdfgds',19,'sdfgs','asdf'),('shashank','kasinadhuni',18,'shashank','shashank1'),('vikas','dayananda',18,'viky','vikas'),('fdfg','ghgkj',18,'yhgjh','1');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-12 11:57:06
