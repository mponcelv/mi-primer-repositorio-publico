CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;

CREATE TABLE cohorte12(
cohorte12_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
alumnos_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR (255) NOT NULL);

ALTER TABLE cohorte
 ADD CONSTRAINT fk_alumnos_cohorte
 FOREIGN KEY (alumno_id)
 REFERENCES alumno (alumno_id);

 
 ALTER TABLE cohorte
 ADD CONSTRAINT fk_instructor_cohorte
 FOREIGN KEY (instructor_id)
 REFERENCES instructor (instructor_id);


CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
rfc VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL, 
sesiones VARCHAR(255) NOT NULL
);

CREATE TABLE equipo(
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(225) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);

ALTER TABLE equipo
ADD CONSTRAINT fk_alumno_equipo
FOREIGN KEY (alumno_id)
REFERENCES alumno (alumno_id);

CREATE TABLE direccion (
direccion_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);

ALTER TABLE direccion
ADD CONSTRAINT fk_alumno_direccion
FOREIGN KEY (alumno_id)
REFERENCES alumno (alumno_id);

CREATE TABLE alumno(
alumno_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR (255) NOT NULL,
amonestaciones INT NOT NULL);

ALTER TABLE alumno
ADD CONSTRAINT fk_alumno_cohorte
FOREIGN KEY (alumno_id)
REFERENCES alumno (alumno_id)
