USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC; 

SELECT Name, Population FROM country WHERE Name = 'México';

SELECT * FROM country WHERE Name = 'México';

-- alias
SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Population AS 'poblacion del pais'FROM country ORDER BY Nombre_de_pais DESC;







