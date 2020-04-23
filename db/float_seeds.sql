DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE float_options(
  id INT NOT NULL AUTO_INCREMENT,
  float_material VARCHAR(100) NOT NULL,
  cost_per_foot DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO float_options (float_material, cost_per_foot)
VALUES 
("Rag", 8.00),
("Linen", 15.50),
("Silk", 18.00),

SELECT * FROM float_options