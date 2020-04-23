DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE spacer_options(
  id INT NOT NULL AUTO_INCREMENT,
  spacer_material VARCHAR(100) NOT NULL,
  cost_per_foot DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO spacer_options (spacer_material, cost_per_foot)
VALUES 
("Rag", 6.00),
("Wood", 8.50),
("Silk", 10.00);

SELECT * FROM spacer_options