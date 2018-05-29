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
  const resp = connection.query(sql);
  //const resp = client.query(sql); //falta aqui ver como conectar a la base de
  console.log(sql);
  //connection.end();
  return resp;

}


app.SELECT = (table, columns, condition = null, callback) => {
  let sql;
  if(condition === null)
  {
    sql = `SELECT ${columns} FROM ${table};`;
  }
  else
  {
    sql = `SELECT ${columns} from ${table} WHERE ${condition};`;
  }
  connection.query(sql, (err, res) => {
    if(err)
    {
      throw err;
    }
    else
    {
      callback(null, res);
    }
  });
};

app.SELECTINNERJOIN = (table, columns, join, using, callback) => {
  let sql;
  sql = `SELECT ${columns} from ${table} INNER JOIN ${join} USING (${using});`;
  connection.query(sql, (err, res) => {
    if(err)
    {
      throw err;
    }
    else
    {
      callback(null, res);
    }
  });
};

app.UPDATE = function(table, attributeValue, condition) {
  let sql = `UPDATE ${table} SET ${attributeValue} WHERE ${condition};`;
  connection.query(sql);
};

app.VIEW = function(table, view, columns, condition){
  let sql = `CREATE OR REPLACE VIEW ${view} AS SELECT
    ${columns} FROM ${table} WHERE ${condition};`;
    connection.query(sql);
};

module.exports = app;
