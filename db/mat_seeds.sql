DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE mat_options(
  id INT NOT NULL AUTO_INCREMENT,
  mat_material VARCHAR(100) NOT NULL,
  cost_per_foot DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO mat_options (mat_material, cost_per_foot)
VALUES 
("4 Ply Rag", 5.50),
("8 Ply Rag", 12.00),
("12 Ply Rag", 21.00);

SELECT * FROM mat_options