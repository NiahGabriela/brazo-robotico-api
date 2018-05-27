// const { Router } = require('express');
// const mysql = require('mysql');
// const dbRouter = Router();
var express    = require("express");
var mysql      = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'pollo',
  password : 'Don$hirito80',
  database : 'mydb'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  //console.log('connected as id ' + connection.threadId);
});

// aqui solo van las peticiones a la base de datos

app.INSERT = function(table_name, columns, values, condition = null, returning = null) {
  var sql = ``;
  sql += `INSERT INTO ${table_name} (${columns})`;
  sql += ` VALUES (${values})`;
  if(condition !== null)
    sql += ` WHERE ${condition}`;
  // if(returning !== null)
  //   sql += ` RETURNING ${returning}`;

  const resp = client.query(sql); //falta aqui ver como conectar a la base de
  console.log(sql);
  return resp;
}

// dbRouter.SELECT = function(table_name,columns,values=null, condition = null, returning = null)
// {
//   var sql = ``;
//   sql += `SELECT ${columns} FROM (${table_name})`;
//   if(condition !== null)
//     sql += ` WHERE ${condition}`;
//   // if(returning !== null)
//   //   sql += ` RETURNING ${returning}`;
//   const resp = client.query(sql); //falta aqui ver como conectar a la base de datos ay que todavia no se como se hace eso
//   console.log(sql);
//   return resp;
// }

app.SELECT = function(table_name,columns,values=null, condition = null, returning = null)
{
  var sql = ``;
  sql += `SELECT ${columns} FROM (${table_name})`;
  if(condition !== null)
    sql += ` WHERE ${condition}`;

console.log(sql);
  connection.query(sql)
  connection.end();

  // if (!err)
  //   console.log('The solution is: ', rows);
  // else
  //   console.log('Error while performing Query.');
    console.log(sql);
};
module.exports = app;
