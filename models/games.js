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

gamesModel.InsertGame = (req, res, callback) => {
  let idActualEstate = null;
  let p1 = '1,1';
  let p2 = '2,2';
  let p3 = '3,3';
  let objective = '5,5';
  let time = req.myTime;

  let gameLogId = null;
  let timeLogs = req.myTime;
  let idChat = null;

  let columnsActualEstate = 'idActualEstate, p1, p2, p3, objective, time';
  let valuesActualEstate = `${idActualEstate}, '${p1}', '${p2}', '${p3}', '${objective}', '${time}'`;

  let condition = null;
  database.INSERT('ActualEstate', columnsActualEstate, valuesActualEstate, condition);

  database.SELECT('ActualEstate', 'max(idActualEstate) idActualEstate', condition, (err, data) => {
    callback(err, data);
    idActualEstate = data[0].idActualEstate;

    console.log(idActualEstate);

    let columnsGameLog = 'gameLogId, timeLogs, idChat, idActualEstate';
    let valuesGameLog = `${gameLogId}, '${timeLogs}', ${idChat}, '${idActualEstate}'`;

    database.INSERT('gameLog', columnsGameLog, valuesGameLog, condition);

    res.send('Datos Cargados a la base de datos');
  });
};

gamesModel.SelectGames = (req, res, callback) => {
  let columns = '*';
  let condition = null;
  database.SELECT('gameLog', columns, condition, (err, data) => {
  callback(err, data);
  });
};

gamesModel.SelectGameById = (req, res, callback) => {
  let columns = '*';
  let condition = 'gameLogId=\'' + req.params.gameId + '\'';
  database.SELECT('gameLog', columns, condition, (err, data) => {
  callback(err, data);
  });
};

module.exports = gamesModel;
