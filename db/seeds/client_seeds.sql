USE fafw_development;


INSERT INTO clients (first_name, last_name, email, phone, address_one, address_two, city, state, zip_code)
VALUES 
("Pablo", "Picasso", "picasso@gmail.com", "718-555-5555", "123 Fake Street", "21A", "Brooklyn", "NY", "11211"),
("Andy", "Warhol", "warhol@gmail.com", "212-555-8888", "123 Soho Street", "2B", "New York", "NY", "10012"),
("Jean-Michel", "Basquiat", "basquiat@gmail.com", "212-222-1111", "123 Prince Street", "5E", "New York", "NY", "10012"),
("Keith", "Haring", "haring@gmail.com", "212-222-1111", "123 Spring Street", "6W", "New York", "NY", "10012");



SELECT * FROM clients;