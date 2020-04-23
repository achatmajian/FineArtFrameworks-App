DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE glazing(
  id INT NOT NULL AUTO_INCREMENT,
  glazing_type VARCHAR(100) NOT NULL,
  glazing_option VARCHAR(100) NOT NULL,
  cost_per_foot DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO glazing (glazing_type, glazing_option, cost_per_foot)
VALUES 
("glass", "Regular Glass", 8.00),
("glass", "Museum Glass", 35.00),
("plexiglass", "Regular Plexiglass", 12.00),
--Not complete, need clarification from Andy for "per frame" stuff



SELECT * FROM glazing