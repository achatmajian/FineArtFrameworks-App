DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE extra_options(
  id INT NOT NULL AUTO_INCREMENT,
  extra_option VARCHAR(100) NOT NULL,
  flat_cost DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO extra_options (extra_option, flat_cost)
VALUES 
("Strainer", 6.00),
("Painted Strainer", 11.00),
("Stretch Canvas", 10.00),
("Raise Mount", 5.00),
("De-fit/Re-fit", 8.00),
("Re-finish", 8.00);

SELECT * FROM extra_options