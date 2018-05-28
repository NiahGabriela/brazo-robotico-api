const { Router } = require ('express');
const database = require('../database');
const gamesModel = Router();


gamesModel.create = function(username, email, password) { //acomodar bien la funcion
  var age,gender,active,permisosChidos;
  age=15; gender="F"; active=1; permisosChidos=0; //para hacer insert de los datos nulos la DB se queja si los dejas en nulos por eso tiene
  //valores por defecto que parecen reales
  var response = databases.INSERT(`User`, //nombre de la base de datos
  `name,age,gender,email,active,permisosChidos,password`, // columnas de la base de la tabla
  `\'${username}\',\'${age}\',\'${gender}\',\'${email}\',\'${active}\',\'${permisosChidos}\',\'${password}\'`, //valores para rellenar
  null,
  `*`);
  return response;
};

gamesModel.SelectGames = (req, res, callback) => {
  let columns = '*';
  let condition = null;
  database.SELECT('gameLog', columns, condition, (err, data) => {
  callback(err, data);
  });
};
module.exports = gamesModel;
