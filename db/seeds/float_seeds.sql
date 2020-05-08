USE fafw_development;

INSERT INTO floats (name, color, cost_type, cost)
VALUES 
-- none
("n/a", "n/a", "per foot", 0.00),
-- rag
("rag", "polar white", "per foot", 8.00),
("rag", "white", "per foot", 8.00),
("rag", "warm white", "per foot", 8.00),
("rag", "antique", "per foot", 8.00),
("rag", "cream", "per foot", 8.00),
("rag", "natural", "per foot", 8.00),
("rag", "black", "per foot", 8.00),
("rag", "other", "per foot", 8.00),
-- linen
("linen", "polar white", "per foot", 18.00),
("linen", "white", "per foot", 18.00),
("linen", "warm white", "per foot", 18.00),
("linen", "antique", "per foot", 18.00),
("linen", "cream", "per foot", 18.00),
("linen", "natural", "per foot", 18.00),
("linen", "black", "per foot", 18.00),
("linen", "other", "per foot", 18.00),
-- silk
("silk", "polar white", "per foot", 18.00),
("silk", "white", "per foot", 18.00),
("silk", "warm white", "per foot", 18.00),
("silk", "antique", "per foot", 18.00),
("silk", "cream", "per foot", 18.00),
("silk", "natural", "per foot", 18.00),
("silk", "black", "per foot", 18.00),
("silk", "other", "per foot", 18.00);

SELECT * FROM floats;