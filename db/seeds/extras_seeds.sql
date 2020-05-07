USE fafw_development;

INSERT INTO extras (name, cost_type, cost)
VALUES
-- none
("n/a", "per foot", 0.00),
-- extras
("extra strainer", "per foot", 6.00),
("painted strainer", "per foot", 11.00),
("stretch canvas", "per foot", 10.00),
("raise mount", "per foot", 5.00),
("de-fit/re-fit", "per foot", 8.00),
("re-finish", "per foot", 8.00);


SELECT * FROM extras;