const { Router } = require ('express');
const database = require('../database');
const gamesModel = Router();


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
  });
};

gamesModel.InsertTeam = (req, res, callback) => {
  let idTeam = null;
  let score = '0';
  let player = req.params.player;
  let gameLogId = req.params.gameLogId;

  let columnsTeam = 'idTeam, score, player, gameLogId';
  let valuesTeam = `${idTeam}, '${score}', '${player}', '${gameLogId}'`;

  let condition = null;
  database.INSERT('Team', columnsTeam, valuesTeam, condition);

  database.SELECT('Team', 'max(idTeam) idTeam', condition, (err, data) => {
    callback(err, data);

    console.log(data[0].idTeam);

    let joint = data[0].idTeam;
    let idUser = req.params.player;
    let columnsJoint = 'joint, idUser';
    let valuesJoint = `'${joint}', '${idUser}'`;

    database.INSERT('joint', columnsJoint, valuesJoint, condition);
  });
  res.send('Team cargado a la base de datos');
};

gamesModel.UpdateScore = function(req, res) {

  let attributeValue = `score='${req.params.score}'`;
  let condition = `idTeam='${req.params.idTeam}'`;
  database.UPDATE('Team', attributeValue, condition);
  res.send(`Nuevo score ${req.params.score} actualizado en la base de datos`);
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
//FALTA ==============================================================================================
gamesModel.SelectGamesByUser = (req, res, callback) => {
  let columns = '*';
  let condition = 'player=\'' + req.params.userId + '\'';
  let view = 'games';
  database.VIEW('Team', view, columns, condition);

  let using = 'gameLogId';
  database.SELECTINNERJOIN('games', columns, 'gameLog', using, (err, data) => {
  callback(err, data);
  });
};
//FALTA ==============================================================================================
module.exports = gamesModel;
