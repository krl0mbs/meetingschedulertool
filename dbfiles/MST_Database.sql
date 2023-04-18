-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: meetingdb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `meetings`
--

DROP TABLE IF EXISTS `meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meetings` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `room` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `7` tinyint NOT NULL DEFAULT '0',
  `7.5` tinyint NOT NULL DEFAULT '0',
  `8` tinyint NOT NULL DEFAULT '0',
  `8.5` tinyint NOT NULL DEFAULT '0',
  `9` tinyint NOT NULL DEFAULT '0',
  `9.5` tinyint NOT NULL DEFAULT '0',
  `10` tinyint NOT NULL DEFAULT '0',
  `10.5` tinyint NOT NULL DEFAULT '0',
  `11` tinyint NOT NULL DEFAULT '0',
  `11.5` tinyint NOT NULL DEFAULT '0',
  `12` tinyint NOT NULL DEFAULT '0',
  `12.5` tinyint NOT NULL DEFAULT '0',
  `13` tinyint NOT NULL DEFAULT '0',
  `13.5` tinyint NOT NULL DEFAULT '0',
  `14` tinyint NOT NULL DEFAULT '0',
  `14.5` tinyint NOT NULL DEFAULT '0',
  `15` tinyint NOT NULL DEFAULT '0',
  `15.5` tinyint NOT NULL DEFAULT '0',
  `16` tinyint NOT NULL DEFAULT '0',
  `16.5` tinyint NOT NULL DEFAULT '0',
  `17` tinyint NOT NULL DEFAULT '0',
  `17.5` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetings`
--

LOCK TABLES `meetings` WRITE;
/*!40000 ALTER TABLE `meetings` DISABLE KEYS */;
INSERT INTO `meetings` VALUES (14,'Room A','2023-04-21',1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1),(15,'Room B','2023-04-21',1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1),(16,'Room C','2023-04-21',1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0),(17,'Room D','2023-04-21',0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0),(18,'Room E','2023-04-21',0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0),(19,'Room F','2023-04-21',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1),(20,'Room G','2023-04-21',0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0),(21,'Room H','2023-04-21',0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1),(22,'Room I','2023-04-21',1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),(23,'Room J','2023-04-21',0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0),(24,'Room K','2023-04-21',0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0),(25,'Room L','2023-04-21',0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0),(26,'Room M','2023-04-21',0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0),(27,'Room N','2023-04-21',0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0),(28,'Room O','2023-04-21',0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0),(29,'Room P','2023-04-21',0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),(30,'Room Q','2023-04-21',0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0),(31,'Room R','2023-04-21',1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1),(32,'Room S','2023-04-21',0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0),(33,'Room T','2023-04-21',1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0),(34,'Room U','2023-04-21',0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1),(35,'Room V','2023-04-21',0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1),(36,'Room W','2023-04-21',1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0),(37,'Room X','2023-04-21',0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0),(38,'Room Y','2023-04-21',0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0),(39,'Room Z','2023-04-21',0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0),(65,'Room A','2023-04-28',1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0),(66,'Room B','2023-04-28',1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1),(67,'Room C','2023-04-28',1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1),(68,'Room D','2023-04-28',1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1),(69,'Room E','2023-04-28',0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1),(70,'Room F','2023-04-28',1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1),(71,'Room G','2023-04-28',1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0),(72,'Room H','2023-04-28',0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0),(73,'Room I','2023-04-28',1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1),(74,'Room J','2023-04-28',0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1),(75,'Room K','2023-04-28',1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0),(76,'Room L','2023-04-28',0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0),(77,'Room M','2023-04-28',1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1),(78,'Room N','2023-04-28',0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1),(79,'Room O','2023-04-28',1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1),(80,'Room P','2023-04-28',0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0),(81,'Room Q','2023-04-28',0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1),(82,'Room R','2023-04-28',1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1),(83,'Room S','2023-04-28',0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1),(84,'Room T','2023-04-28',0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1),(85,'Room U','2023-04-28',1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1),(86,'Room V','2023-04-28',0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0),(87,'Room W','2023-04-28',1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0),(88,'Room X','2023-04-28',0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0),(89,'Room Y','2023-04-28',1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0),(90,'Room Z','2023-04-28',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
/*!40000 ALTER TABLE `meetings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roominfo`
--

DROP TABLE IF EXISTS `roominfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roominfo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room` varchar(50) DEFAULT NULL,
  `capacity` int NOT NULL DEFAULT '0',
  `network` tinyint NOT NULL DEFAULT '0',
  `vidtelecon` tinyint NOT NULL DEFAULT '0',
  `building` tinyint NOT NULL DEFAULT '0',
  `connectivity` tinyint NOT NULL DEFAULT '0',
  `display` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roominfo`
--

LOCK TABLES `roominfo` WRITE;
/*!40000 ALTER TABLE `roominfo` DISABLE KEYS */;
INSERT INTO `roominfo` VALUES (1,'Room A',15,0,1,2,0,1),(2,'Room B',12,1,0,1,1,0),(3,'Room C',22,1,1,0,1,1),(4,'Room D',30,0,1,2,0,0),(5,'Room E',7,1,0,1,1,1),(6,'Room F',0,0,0,0,0,0),(7,'Room G',0,0,0,0,0,0),(8,'Room H',0,0,0,0,0,0),(9,'Room I',0,0,0,0,0,0),(10,'Room J',0,0,0,0,0,0),(11,'Room K',32,1,0,2,1,1),(12,'Room L',0,0,0,0,0,0),(13,'Room M',0,0,0,0,0,0),(14,'Room N',0,0,0,0,0,0),(15,'Room O',0,0,0,0,0,0),(16,'Room P',0,0,0,0,0,0),(17,'Room Q',0,0,0,0,0,0),(18,'Room R',0,0,0,0,0,0),(19,'Room S',0,0,0,0,0,0),(20,'Room T',0,0,0,0,0,0),(21,'Room U',0,0,0,0,0,0),(22,'Room V',0,0,0,0,0,0),(23,'Room W',0,0,0,0,0,0),(24,'Room X',0,0,0,0,0,0),(25,'Room Y',0,0,0,0,0,0),(26,'Room Z',0,0,0,0,0,0);
/*!40000 ALTER TABLE `roominfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-18 11:17:44
