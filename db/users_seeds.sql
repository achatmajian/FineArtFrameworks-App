DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  user_email VARCHAR(50) NOT NULL,
  user_password VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
  UNIQUE KEY (user_email)
);

INSERT INTO users (first_name, last_name, user_email, user_password)
VALUES 
("Ed", "Messikian", "ed@fineartframeworks.com", "123456"),
("Andy", "Roz", "andy@fineartframeworks.com", "123456"),
("Arek", "Chatmajian", "arek@fineartframeworks.com", "123456"),
("Katie", "Lord", "katielord27.com", "123456");

SELECT * FROM users