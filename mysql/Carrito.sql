USE shades;

CREATE TABLE carrito(
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
usuario_id INT NOT NULL ,
producto_id INT NOT NULL,
cantidad_productos INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(8.2) NOT NULL
);


INSERT INTO carrito(orden_id, usuario_id, producto_id, cantidad_productos, fecha_compra, total)
VALUES(123, 1, 1, 1, '2022-09-03', 599),
(124, 2, 3, 2, '2022-09-04', 675),
(125, 3, 2, 3, '2022-09-05', 865),
(126, 4, 6, 4, '2022-09-06', 456),
(127, 5, 7, 5, '2022-09-07', 458),
(128, 6, 8, 6, '2022-09-08', 325),
(129, 7, 9, 7, '2022-09-09', 790),
(130, 8, 10, 8, '2022-09-10', 1235),
(131, 9, 11, 9, '2022-09-11', 587),
(132, 10, 12, 10, '2022-09-12', 3258),
(133, 11, 13, 11, '2022-09-13', 4589);
 




