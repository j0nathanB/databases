var models = require('../models');
var request = require('request');

// exports.headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };

// console.log("index.js - controllers")

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data) {
        res.json(data);
      });
      // if (req.method === 'GET'){
      //   res.writeHead(200, exports.headers);
      //   res.end(models.messages.get([]));
      // } 
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var nose = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(nose, function(err, data) {
        res.sendStatus(201);
      });

      //console.log(req.body)
      // if (req.method === 'POST'){
      //   res.writeHead(302, {Location: url/filePath});
      //   res.end(models.messages.post(data))
      // } 
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, data) {
        res.json(data);
      });
    },
    post: function (req, res) {
      var cheese = [req.body.username];
      models.users.post(cheese, function(err, data) {
        res.sendStatus(201);
      });
    }
  }
};

