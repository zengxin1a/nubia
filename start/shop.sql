# Host: localhost  (Version: 5.5.53)
# Date: 2020-08-27 17:02:57
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "cart"
#

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `product_id` varchar(300) NOT NULL,
  `product_name` varchar(300) NOT NULL,
  `product_img` varchar(30) NOT NULL,
  `product_price` int(11) NOT NULL DEFAULT '0',
  `product_num` int(11) NOT NULL DEFAULT '0',
  `submission_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "cart"
#

/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('1','5彩斑斓黑','../img/list-01.png',3725,19,'2020-08-27 09:52:17');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;

#
# Structure for table "info"
#

DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Data for table "info"
#

/*!40000 ALTER TABLE `info` DISABLE KEYS */;
INSERT INTO `info` VALUES (1,'lucy','123'),(2,'lili','123'),(3,'','123'),(4,'oo','123'),(5,'pp','123'),(6,'ll','123'),(7,'ppp','123'),(8,'lp','123');
/*!40000 ALTER TABLE `info` ENABLE KEYS */;
