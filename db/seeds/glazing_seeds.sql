USE fafw_development;

INSERT INTO glazings (name, glazing_type, cost_type, cost)
VALUES
-- none
("n/a", "n/a", "per foot", 0.00),
-- glass
("regular glass", "glass", "per foot", 8.00),
("tru vue ultra vue", "glass", "per foot", 21.00),
("museum glass", "glass", "per foot", 35.00),
("art glass", "glass", "per foot", 35.00),
-- plexi
("regular plexiglass", "plexiglass", "per foot", 12.00),
("op-3 plexiglass", "plexiglass", "per foot", 19.00),
-- museum plexi
("optimum museum plexi", "plexiglass", "40 x 60", 990.00),
("optimum museum plexi", "plexiglass", "48 x 96", 1450.00),
("optimum museum plexi", "plexiglass", "72 x 96", 3200.00),
("optimum museum plexi", "plexiglass", "72 x 120", 7400.00);

SELECT * FROM glazings