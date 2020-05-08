USE fafw_development;

INSERT INTO spacers (name, cost_type, cost)
VALUES 
-- none
("n/a", "per foot", 0.00),
-- spacers
("rag", "per foot", 6.00),
("wood", "per foot", 8.50),
("silk", "per foot", 10.00);

SELECT * FROM spacers;