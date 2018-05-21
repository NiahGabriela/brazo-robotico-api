const { Router } = require('express');
const mysql = require('mysql');
const dbRouter = Router();

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tamarindo',
  database : 'my_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

// connection.connect();
//
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();

module.exports = dbRouter;
