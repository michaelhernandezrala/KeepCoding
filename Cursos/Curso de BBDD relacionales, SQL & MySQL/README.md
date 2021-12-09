# Curso de BBDD relacionales, SQL & MySQL

## Manipulación de BBDD
* Para ver las bases de datos que tenemos en nuestro servidor usamos el comando (F9 para ejecutar)
```sh
show DATABASES
```
* Para ver las tablas que contiene una base de datos usamos el comando
```sh
show TABLES from DB_NAME
```
* Para ver las columnas que tiene una tabla usamos el comando
```sh
show COLUMNS from DB_NAME.TABLE_NAME
```
* Para crear una base de datos usamos el comando
```sh
create DATABASE (if not exists) DB_NAME
```
* Para eliminar una base de datos usamos el comando
```sh
drop DATABASE DB_NANME
```

NOTAS:
* MySQL es sensible a mayúsculas y minúsculas
* No podemos crear dos bases de datos con el mismo nombre

## Manipulación de tablas
* Para crear tablas es necesario que indiquemos el tipo de dato van a tener las columnas que componen esa tabla. Tenemos entre los más comunes: STRING (char(n), varchar(n)), NUMERICOS (int(n), integer(n)), DECIMALES (decimal(n,d)), FECHA (date, datetime), LOB (Large Objects: Para almacenar objetos muy grandes como fotos) ... y la estructura y diseño de base de datos que vamos a usar (cuantas tablas vamos a necesitar, que van a almacenar ...)
* Clave primaria:
    - Consiste en una o más columnas cuyos datos contenidos son utilizados para identificar de manera única cada fila en la tabla.
    - No puede haber duplicados
    - No puede tener registros vacíos
    - Sólo puede haber una por tabla
    - Se almacena en un índica
* Clave foránea:
    - Es un grupo de una o más columnas en una tabla que referencian a la clave primaria de otra tabla.
    - Pueden formar parte de la clave primaria
    - Puede contener duplicados
    - Puede tener registros vacíos
    - En la misma tabla puede haber varías
* Formas normales
Son proporcionan los criterios para determinar el grado de vulnerabilidad que tiene una tabla a inconsistencias y anomalías lógicas:
    * NF1
        - La tabla contiene una clave única
        - No tiene datos repetidos
    * NF2 
        - NF1
        - Todo registro debe depender únicamente de la clave principal
        - Las columnas pueden depender de otras tablas, pero de campos que sean clave en sus respectivas tablas
    * NF3
        - NF2
        - No puede haber columnas que dependen de otras columnas que no sean clave principal
    * NF4
        - NF3
        - Las relaciones muchos a muchos entre tablas no tiene redundancia
    * NF5 
        - NF4
        - La tabla original debe ser reconstruida desde las tablas resultantes en las cuales ha sido troceada
    * NF6
        - NF5
        - Si se tiene más de dos claves candidatas en una tabla, se tendrán que crear otras tablas con éstas
## CREACIÓN DE UNA TABLA
```sh
use SPRINGFIELD

create TABLE PERSONAJES
(ID_PERSONAJES INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
DESC_PERSONAJE VARCHAR(255),
ID_FAMILIA INT,
ID_SEXO INT,
ID_MATRIMONIO INT,
ID_LUGAR_RESIDENCIA INT,
ID_PROFESION INT,
ID_LUGAR_PROFESION INT,
ID_LUGAR_PROFESION INT,
FECHA_INSERT_DATETIME DATETIME,
FECHA_MODIFICACION DATETIME);
```
## ALTERACION DE LAS TABLAS
Para renombrar el nombre de una tabla hacemos uso del comando
```sh
rename TABLE TABLE_OLD_NAME to TABLE_NEW_NAME
```
Para renombrar el valor de una columna hacemos uso del comando
```sh
alter TABLE TABLE_NAME change COLUMN_OLD_NAME COLUMN_NEW_NAME VALUE_TYPE
```
Para modificar el tipo del valor de una columna hacemos uso del comando
```sh
alter TABLE TABLE_NAME modify COLUMN_NAME NEW_VALUE_TYPE 
```
Para añadir una nueva columna a la tabla hacemos uso del comando (se añade al final de la tabla)
```sh
alter TABLE TABLE_NAME add NEW_COLUMN_NAME VALUE_TYPE
```
Para añadir una nueva columna a la tabla hacemos uso del comando (se añade al principio de la tabla)
```sh
alter TABLE TABLE_NAME add NEW_COLUMN_NAME VALUE_TYPE FIRST
```
Para añadir una nueva columna a la tabla hacemos uso del comando (se añade al despues de un determinado campo)
```sh
alter TABLE TABLE_NAME add NEW_COLUMN_NAME VALUE_TYPE after COLUMN_NAME
```
## POBLAR CON REGISTROS UNA TABLA
