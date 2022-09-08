USE tienda;

-- INNER JOIN 
-- explicita

SELECT * 
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

SELECT 
clientes.cliente_id AS 'NUMERO DE CLIENTE',
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- inplicita
SELECT *
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;

--LEFT JOIN
SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- right join
SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;



INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (10, '2022-09-07', 302.60, 5);
-- mostrar direccion de cada pais
USE sakila;
/*
adress - city_id / adress
city - city_id / city / country_id
*/

SELECT
address.address,
city.city,
city.country_id
FROM address
INNER JOIN  city
ON address.city_id = city.city_id;

SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON country.country_id = city.country_id
INNER JOIN address ON address.city_id = city.city_id;


