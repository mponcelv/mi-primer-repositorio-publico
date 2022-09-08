USE sakila;

SELECT * FROM payment;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT() cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM Country;

-- Cantidad de ventas que tubio el trabajdor 2
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- Cantidad de clientes distintos
SELECT  COUNT(DISTINCT customer_id) FROM payment;

/*
SUM()
*/
SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2 ;

-- cual cliente realizo mas rentas? 149-46 / 318-12
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- Group BY agrupa solo si se usa con su AVG y COUNT, pero omite los valores repetidos
-- Order BY ORDENA SEGUNDA COLUMNA O FUNCION QUE LE INDIQUE ASC / DESC
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

SELECT customer_id, SUM(amount) AS 'total' FROM payment GROUP BY customer_id ORDER BY SUM(amount) DESC;


-- AVG - regresa el promedio
SELECT AVG(amount) AS Promedio FROM payment;

-- cual cliente gasto mas en promedio
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) ASC;

SELECT title, name FROM film, language; 
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;

SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;






