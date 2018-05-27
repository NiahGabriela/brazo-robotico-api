const { Router } = require('express');
const mysql = require('mysql');
const dbRouter = Router();

let connection = mysql.createConnection({
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

exports.INSERT = function(table_name, columns, values, condition = null, returning = null) {
  var sql = ``;
  sql += `INSERT INTO ${table_name} (${columns})`;
  sql += ` VALUES (${values})`;
  if(condition !== null)
    sql += ` WHERE ${condition}`;
  // if(returning !== null)
  //   sql += ` RETURNING ${returning}`;

  const resp = client.query(sql); //falta aqui ver como conectar a la base de datos
  return resp;
}

exports.SELECT = function(table_name,columns,values=null, condition = null, returning = null)
{
  var sql = ``;
  sql += `SELECT ${columns} FROM (${table_name})`;
  if(condition !== null)
    sql += ` WHERE ${condition}`;
  // if(returning !== null)
  //   sql += ` RETURNING ${returning}`;
  const resp = client.query(sql); //falta aqui ver como conectar a la base de datos ay que todavia no se como se hace eso
  return resp;
}

module.exports = dbRouter;
