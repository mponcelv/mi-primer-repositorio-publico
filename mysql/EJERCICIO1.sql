CREATE DATABASE generation;
USE generation;

CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);


SELECT * FROM cohorte_16;

INSERT INTO cohorte_16 (nombre, apellido, companieros, direccion, proyecto)
VALUES ('VISCTOR', 'fernandez', 7,'tulancingo hidalgo', 'java'),
 ('jonatan', 'vazques', 7,'cdmx', 'javascript'),
 ('raul', 'sanchez', 4,'guadalajara', 'javascript'),
('hector', 'fernandez', 4,'guerrero', 'java'),
 ('maria', 'vargas', 4,'edo de mex', 'java'),
 ('magali', 'quiroz', 7,'cdmx', 'javascript');
 
 SELECT * FROM cohorte_16;
 
 DELETE FROM cohorte_16
 WHERE alumno_id = 3;
 
 UPDATE cohorte_16
 SET 	nombre = 'maria',
 apellido = 'pardo'
 WHERE alumno_id = 5;
SELECT nombre, apellido FROM cohorte_16 WHERE nombre = 'VISCTOR';

SELECT * FROM cohorte_16;

SELECT nombre, apellido FROM cohorte_16 ORDER BY apellido ASC;




