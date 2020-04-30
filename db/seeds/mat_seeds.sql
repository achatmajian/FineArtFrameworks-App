DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE mat_options(
  id INT NOT NULL AUTO_INCREMENT,
  mat_material VARCHAR(100) NOT NULL,
  mat_color VARCHAR(100) NOT NULL,
  cost_per_foot DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO mat_options (mat_material, mat_color, cost_per_foot)
VALUES 
-- 4 Ply 
("4 Ply Rag", "Polar White", 5.50),
("4 Ply Rag", "White", 5.50),
("4 Ply Rag", "Warm White", 5.50),
("4 Ply Rag", "Antique", 5.50),
("4 Ply Rag", "Cream", 5.50),
("4 Ply Rag", "Natural", 5.50),
("4 Ply Rag", "Black", 5.50),
("4 Ply Rag", "Other", 5.50),
-- 8 Ply 
("8 Ply Rag", "Polar White", 12.00),
("8 Ply Rag", "White", 12.00),
("8 Ply Rag", "Warm White", 12.00),
("8 Ply Rag", "Antique", 12.00),
("8 Ply Rag", "Cream", 12.00),
("8 Ply Rag", "Natural", 12.00),
("8 Ply Rag", "Black", 12.00),
("8 Ply Rag", "Other", 12.00),
-- 12 Ply 
("12 Ply Rag", "Polar White", 21.00),
("12 Ply Rag", "White", 21.00),
("12 Ply Rag", "Warm White", 21.00),
("12 Ply Rag", "Antique", 21.00),
("12 Ply Rag", "Cream", 21.00),
("12 Ply Rag", "Natural", 21.00),
("12 Ply Rag", "Black", 21.00),
("12 Ply Rag", "Other", 21.00);

SELECT * FROM mat_options