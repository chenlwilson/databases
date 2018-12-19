-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID integer NOT NULL AUTO_INCREMENT,
  username text,
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  ID integer NOT NULL AUTO_INCREMENT,
  roomname text,
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  ID integer NOT NULL AUTO_INCREMENT,
  created_at datetime,
  text text,
  id_users integer,
  id_rooms integer,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_users) REFERENCES users(id),
  FOREIGN KEY (id_rooms) REFERENCES rooms(id)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

