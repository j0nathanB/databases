var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      var weary = 'select messages.id, messages.text, messages.roomname, users.username from messages left outer join users on (messages.user_id = users.id) order by messages.id desc;';
      db.query(weary, function(err, data) {
        cb(err, data);
      });
    }, // a function which produces all the messages
    post: function (array, cb) {
      var beard = 'insert into messages(text, user_id, roomname) value (?, (select id from users where username = ? limit 1), ?);';
      db.query(beard, array, function(err, data) {
        cb(err, data);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (cb) {
      var params = 'select * from users;';
      db.query(params, function(err, data) {
        cb(err, data);
      });
    }, 
    post: function (array, cb) {
      var finger = 'insert into users(username) value (?);';
      db.query(finger, array, function(err, data) {
        cb(err, data);
      });
    } 
  }
};

