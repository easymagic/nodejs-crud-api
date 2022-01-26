create database mydb;

------\c into database

create table todo(
    id serial primary key,
    description varchar(255)
);