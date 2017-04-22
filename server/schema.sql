CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer not null auto_increment,
  text varchar(140) not null,
  user_id integer not null,
  roomname varchar(15),
  primary key(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id integer not null auto_increment,
  username varchar(10) not null,
  primary key(id)
);

/* Manually insert into messages:
foreign key(user_id) references users(id),
foreign key(room_id) references rooms(id)
by inserting:*/

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

/*many messages for one room, but not many rooms to one message*/
/*many rooms to one user and many users to one room*/
/*many messages to one user but not many users to one message*/

/* when a user makes a message, id = username_id = roomname_id = message_id*/
/* rooms has unique ids for roomnames so user can select from them */
/* users store all individual usernames with id associations */
/* messages combines rooms and users to append messages to appropriate criteria */


