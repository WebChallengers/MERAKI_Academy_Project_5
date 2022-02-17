create database MERAKI_Academy_Project_5;
use MERAKI_Academy_Project_5;

create table user (
id INT AUTO_INCREMENT NOT NULL,
Username VARchar (255) UNIQUE,
Phone_number INT,
email VARchar (255) UNIQUE,
Password VARchar (255),
profileImg VARCHAR(255),
Primary Key (id)
);




create table products (
id INT AUTO_INCREMENT NOT NULL,
Product_Name VARchar (255),
Description VARchar (255),
Image VARchar (255),
state_product VARchar (255),
userId INT,
Price INT,
Category VARchar (255),
softDelete INT DEFAULT 0,
Product_Exchange VARCHAR(255),
FOREIGN KEY (userId) REFERENCES user(id),
Primary Key (id)
);

create table orders (
id INT AUTO_INCREMENT NOT NULL,
Product_Name VARCHAR (255),
Product_Price INT,
Product_Description VARCHAR (255),
Category VARchar (255),
product_id INT,
FOREIGN KEY (product_id) REFERENCES products(id),
Primary Key (id)
);


-- drop database MERAKI_Academy_Project_5;
