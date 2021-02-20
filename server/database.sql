CREATE DATABASE hopejwt;

--set extention
CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)

);

--create extension if not exists "uuid-ossp";


--Fake users
INSERT INTO users(user_name, user_email, user_password) VALUES ('caio','caionnc@gmail.com','hopeproject');