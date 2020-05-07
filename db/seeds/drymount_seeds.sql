USE fafw_development;

INSERT INTO drymount (name, cost_type, cost)
VALUES
-- none
("n/a", "per foot", 0.00),
-- by foot
("regular foam", "per foot", 5.50),
("acid free foam", "per foot", 8.00),
("rag", "per foot", 9.00),
-- by dimension
('plexi 1/8" clear', '8 x 10', 50.00),
('plexi 1/8" clear', '11 x 14', 57.00),
('plexi 1/8" clear', '16 x 20', 64.00),
('plexi 1/8" clear', '20 x 24', 77.00),
('plexi 1/8" clear', '20 x 30', 99.00),
('plexi 1/8" clear', '24 x 30', 106.00),
('plexi 1/8" clear', '30 x 40', 143.00),
('plexi 1/8" clear', '40 x 40', 204.00),
('plexi 1/8" clear', '40 x 50', 233.00),
('plexi 1/8" clear', '40 x 60', 281.00),
('plexi 1/8" clear', '40 x 72', 328.00),
('plexi 1/8" clear', '40 x 84', 374.00),
('plexi 1/8" clear', '40 x 96', 399.00),
('plexi 1/8" clear', '40 x 108', 460.00),
('plexi 1/8" clear', '40 x 120', 495.00),
('plexi 1/8" clear', '48 x 50', 297.00),
('plexi 1/8" clear', '48 x 60', 352.00),
('plexi 1/8" clear', '48 x 72', 410.00),
('plexi 1/8" clear', '48 x 84', 431.00),
('plexi 1/8" clear', '48 x 96', 451.00),
('plexi 1/8" clear', '48 x 108', 497.00),
('plexi 1/8" clear', '48 x 120', 550.00),
('plexi 1/8" clear', '60 x 60', 431.00),
('plexi 1/8" clear', '60 x 72', 497.00),
('plexi 1/8" clear', '60 x 84', 517.00),
('plexi 1/4" clear', '8 x 10', 53.00),
('plexi 1/4" clear', '11 x 14', 59.00),
('plexi 1/4" clear', '16 x 20', 72.00),
('plexi 1/4" clear', '20 x 24', 85.00),
('plexi 1/4" clear', '20 x 30', 107.00),
('plexi 1/4" clear', '24 x 30', 116.00),
('plexi 1/4" clear', '30 x 40', 156.00),
('plexi 1/4" clear', '40 x 40', 231.00),
('plexi 1/4" clear', '40 x 50', 257.00),
('plexi 1/4" clear', '40 x 60', 319.00),
('plexi 1/4" clear', '40 x 72', 374.00),
('plexi 1/4" clear', '40 x 84', 410.00),
('plexi 1/4" clear', '40 x 96', 440.00),
('plexi 1/4" clear', '40 x 108', 484.00),
('plexi 1/4" clear', '40 x 120', 528.00),
('plexi 1/4" clear', '48 x 50', 323.00),
('plexi 1/4" clear', '48 x 60', 374.00),
('plexi 1/4" clear', '48 x 72', 451.00),
('plexi 1/4" clear', '48 x 84', 469.00),
('plexi 1/4" clear', '48 x 96', 493.00),
('plexi 1/4" clear', '48 x 108', 541.00),
('plexi 1/4" clear', '48 x 120', 616.00),
('plexi 1/4" clear', '60 x 60', 468.00),
('plexi 1/4" clear', '60 x 72', 541.00),
('plexi 1/4" clear', '60 x 84', 572.00),
('sintra 3mm white', '8 x 10', 37.00),
('sintra 3mm white', '11 x 14', 40.00),
('sintra 3mm white', '16 x 20', 47.00),
('sintra 3mm white', '20 x 24', 57.00), 
('sintra 3mm white', '20 x 30', 74.00),
('sintra 3mm white', '24 x 30', 80.00), 
('sintra 3mm white', '30 x 40', 107.00), 
('sintra 3mm white', '40 x 40', 145.00),
('sintra 3mm white', '40 x 50', 160.00), 
('sintra 3mm white', '40 x 60', 200.00), 
('sintra 3mm white', '40 x 72', 253.00),
('sintra 3mm white', '40 x 84', 275.00),
('sintra 3mm white', '40 x 96', 293.00),
('sintra 3mm white', '40 x 108', 315.00),
('sintra 3mm white', '40 x 120', 352.00),
('sintra 3mm white', '48 x 50', 213.00), 
('sintra 3mm white', '48 x 60', 253.00),
('sintra 3mm white', '48 x 72', 275.00),
('sintra 3mm white', '48 x 84', 293.00),
('sintra 3mm white', '48 x 96', 347.00),
('sintra 3mm white', '48 x 108', 380.00),
('sintra 3mm white', '48 x 120', 411.00),
('sintra 3mm white', '60 x 60', 319.00),
('sintra 3mm white', '60 x 72', 380.00),
('sintra 3mm white', '60 x 84', 396.00),
('sintra 6mm', '8 x 10', 40.00),
('sintra 6mm', '11 x 14', 44.00),
('sintra 6mm', '16 x 20', 52.00),
('sintra 6mm', '20 x 24', 64.00), 
('sintra 6mm', '20 x 30', 80.00),
('sintra 6mm', '24 x 30', 94.00), 
('sintra 6mm', '30 x 40', 121.00), 
('sintra 6mm', '40 x 40', 169.00),
('sintra 6mm', '40 x 50', 187.00), 
('sintra 6mm', '40 x 60', 227.00), 
('sintra 6mm', '40 x 72', 275.00),
('sintra 6mm', '40 x 84', 293.00),
('sintra 6mm', '40 x 96', 319.00),
('sintra 6mm', '40 x 108', 352.00),
('sintra 6mm', '40 x 120', 385.00),
('sintra 6mm', '48 x 50', 411.00), 
('sintra 6mm', '48 x 60', 279.00),
('sintra 6mm', '48 x 72', 319.00),
('sintra 6mm', '48 x 84', 352.00),
('sintra 6mm', '48 x 96', 385.00),
('sintra 6mm', '48 x 108', 411.00),
('sintra 6mm', '48 x 120', 448.00),
('sintra 6mm', '60 x 60', 363.00),
('sintra 6mm', '60 x 72', 387.00),
('sintra 6mm', '60 x 84', 411.00),
('dibond', '8 x 10', 75.00),
('dibond', '11 x 14', 89.00),
('dibond', '16 x 20', 110.00),
('dibond', '20 x 24', 132.00), 
('dibond', '20 x 30', 174.00),
('dibond', '24 x 30', 198.00), 
('dibond', '30 x 40', 231.00), 
('dibond', '40 x 40', 341.00),
('dibond', '40 x 50', 341.00), 
('dibond', '40 x 60', 407.00), 
('dibond', '40 x 72', 468.00),
('dibond', '40 x 84', 539.00),
('dibond', '40 x 96', 592.00),
('dibond', '40 x 108', 636.00),
('dibond', '40 x 120', 673.00),
('dibond', '48 x 50', 407.00), 
('dibond', '48 x 60', 462.00),
('dibond', '48 x 72', 517.00),
('dibond', '48 x 84', 572.00),
('dibond', '48 x 96', 616.00),
('dibond', '48 x 108', 704.00),
('dibond', '48 x 120', 792.00),
('dibond', '60 x 60', 532.00),
('dibond', '60 x 72', 600.00),
('dibond', '60 x 84', 671.00),
('aluminum .063"', '8 x 10', 77.00),
('aluminum .063"', '11 x 14', 94.00),
('aluminum .063"', '16 x 20', 121.00),
('aluminum .063"', '20 x 24', 154.00),
('aluminum .063"', '20 x 30', 187.00),
('aluminum .063"', '24 x 30', 209.00), 
('aluminum .063"', '30 x 40', 308.00), 
('aluminum .063"', '40 x 40', 402.00),
('aluminum .063"', '40 x 50', 413.00), 
('aluminum .063"', '40 x 60', 473.00), 
('aluminum .063"', '40 x 72', 550.00),
('aluminum .063"', '40 x 84', 638.00),
('aluminum .063"', '40 x 96', 704.00),
('aluminum .063"', '40 x 108', 748.00),
('aluminum .063"', '40 x 120', 792.00),
('aluminum .063"', '48 x 50', 484.00),
('aluminum .063"', '48 x 60', 539.00),
('aluminum .063"', '48 x 72', 627.00),
('aluminum .063"', '48 x 84', 704.00),
('aluminum .063"', '48 x 96', 748.00),
('aluminum .063"', '48 x 108', 792.00),
('aluminum .063"', '48 x 120', 858.00),
('aluminum .063"', '60 x 60', 616.00),
('aluminum .063"', '60 x 72', 704.00),
('aluminum .063"', '60 x 84', 781.00);



SELECT * FROM drymount;


