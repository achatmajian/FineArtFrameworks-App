DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE drymount_options(
  id INT NOT NULL AUTO_INCREMENT,
  drymount_material VARCHAR(100) NOT NULL,
  cost_per_foot DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO drymount_options (drymount_material, cost_per_foot)
VALUES 
("Regular Foam", 5.50),
("Acid Free Foam", 8.00),
("Rag", 9.00),

SELECT * FROM drymount_options