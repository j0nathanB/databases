var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
  //host ??
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

dbConnection.connect();

module.exports = dbConnection;


//         if (err) throw err;
//       })

// dbConnection.query("insert into messages (text, user_id, room_id) values ();", array, function(err, data) {
//         if (err) throw err;
//       });

// module.exports = {
//   uhh: dbConnection.query("insert into messages (text, user_id, room_id) values ();", array, function(err, data) {
//         if (err) throw err;
//       });
  
// }

