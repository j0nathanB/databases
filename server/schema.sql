/*CREATE DATABASE chat;*/

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer,
  username_id integer,
  message text not null,
  roomname_id integer,
  primary key(id),
  foreign key(username_id),
  foreign key(roomname_id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id integer,
  roomname text not null,
  username_id integer,
  message_id integer,
  primary key(id),
  foreign key(username_id),
  foreign key(message_id)
);

CREATE TABLE users (
  id integer,
  username text not null,
  roomname_id integer,
  message_id integer,
  primary key(id),
  foreign key(roomname_id),
  foreign key(message_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/*many messages for one room, but not many rooms to one message*/
/*many rooms to one user and many users to one room*/
/*many messages to one user but not many users to one message*/

/* when a user makes a message, id = username_id = roomname_id = message_id*/
/* rooms has unique ids for roomnames so user can select from them */
/* users store all individual usernames with id associations */
/* messages combines rooms and users to append messages to appropriate criteria */


