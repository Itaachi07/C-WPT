create database cars_db;
use cars_db;

CREATE TABLE carsTB (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30), model VARCHAR(50), price INT ,car_color VARCHAR(50));

CREATE TABLE userTB (empid INT PRIMARY KEY AUTO_INCREMENT, companyname VARCHAR(30), email VARCHAR(50), password VARCHAR(50));