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
("glass", "Tru Vue Ultra Vue", 21.00),
("glass", "Museum Glass", 35.00),
("glass", "Art Glass", 35.00),
("plexiglass", "Regular Plexiglass", 12.00),
("plexiglass", "UV Plexiglass", 19.00),
--Haven't included Museum Plexiglass, as is it priced per frame instead of per foot. Need to figure out how to apply certain things that require a flat fee.



SELECT * FROM glazing