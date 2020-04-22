DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE orders(
  id INT NOT NULL AUTO_INCREMENT,
  client_first_name VARCHAR(20) NOT NULL,
  client_last_name VARCHAR(20) NOT NULL,
  frame_quantity INT(50) NOT NULL,
  date_received DATETIME(10) NOT NULL,
  date_due DATETIME(10) NOT NULL,
  PRIMARY KEY (id)
  UNIQUE KEY (id)
);

INSERT INTO orders (client_first_name, client_last_name, frame_quantity, date_received, date_due)
VALUES 
("Edward", "Messikian", 3)



SELECT * FROM orders