DROP DATABASE IF EXISTS fafw_test_DB;
CREATE DATABASE fafw_test_DB;

USE fafw_test_DB;

CREATE TABLE clients(
  id INT NOT NULL AUTO_INCREMENT,
  client_first_name VARCHAR(20) NOT NULL,
  client_last_name VARCHAR(20) NOT NULL,
  client_email VARCHAR(50) NOT NULL,
  client_phone VARCHAR(20) NOT NULL,
  client_address VARCHAR(100) NOT NULL,
  client_apartment VARCHAR(100),
  client_city VARCHAR(100) NOT NULL,
  client_state VARCHAR(100) NOT NULL,
  client_zipcode VARCHAR(5) NOT NULL,
  PRIMARY KEY (id)
  UNIQUE KEY (client_email)
);

INSERT INTO clients (client_first_name, client_last_name, client_email, client_phone, client_address, client_apartment, client_city, client_state, client_zipcode)
VALUES 
("Pablo", "Picasso", "picasso@gmail.com", "718-555-5555", "123 Fake Street", "21A", "Brooklyn", "NY", "11211");
("Andy", "Warhol", "warhol@gmail.com", "212-555-8888", "123 Soho Street", "2B", "New York", "NY", "10012");
("Jean-Michel", "Basquiat", "basquiat@gmail.com", "212-222-1111", "123 Prince Street", "5E", "New York", "NY", "10012");
("Keith", "Haring", "basquiat@gmail.com", "212-222-1111", "123 Spring Street", "6W", "New York", "NY", "10012");



SELECT * FROM clients