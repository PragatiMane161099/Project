create database mystore;
use mystore;
--stat 0 = inactive, 1 = active, 2 = suspended
create table user(id integer primary key auto_increment, firstname varchar(20), lastname varchar(20), email varchar(20), password varchar(20), phone varchar(20), status integer default 0, created_on timestamp default CURRENT_TIMESTAMP);
create table user_Address(id integer primary key auto_increment, userId integer, line1 varchar(100), line2 varchar(100), cisty varchar(100), state varchar(100), zipcode integer, created_on timestamp default CURRENT_TIMESTAMP);
create table admins(id integer primary key auto_increment, firstname varchar(20), lastname varchar(20), email varchar(20), password varchar(100), phone varchar(20), created_on timestamp default CURRENT_TIMESTAMP);
create table catagory(id integer primary key auto_increment, title varchar(100), description varchar(1000), created_on timestamp default CURRENT_TIMESTAMP);
create table brand(id integer primary key auto_increment, title varchar(100), description varchar(1000), created_on timestamp default CURRENT_TIMESTAMP);
create table product(id integer primary key auto_increment, title varchar(100), description varchar(1000), price float, categoryId integer, brandId integer, imageFile varchar(100), created_on timestamp default CURRENT_TIMESTAMP);
create table productReviews(id integer primary key auto_increment, productId integer, userId integer, rating float, review varchar(1024), created_on timestamp default CURRENT_TIMESTAMP);
create table cart(id integer primary key auto_increment, userId integer, productId integer, price float, quantity float, created_on timestamp default CURRENT_TIMESTAMP);
--1 create, 2 pack, 3 dispatch, 4 outfor del, 5 delivered, 6 cancelled
create table userOrder(id integer primary key auto_increment,userId integer, placedOn date, orderState integer, orderComments varchar(1024), totalAmount float, created_on timestamp default CURRENT_TIMESTAMP); 
create table userOrderDetails(id integer primary key auto_increment, orderId integer, productId integer, price float, quantity float, totalAmount float, created_on timestamp default CURRENT_TIMESTAMP); 