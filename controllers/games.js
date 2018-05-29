const {Router} = require ('express');
const gameController = Router();
const model = require ('../models/games');

gameController.SelectGames = (req, res, callback) => {
  model.SelectGames(req, res, (err, data) => {
  callback(err, data);
  });
};

gameController.GetGame = (req, res, callback) => {
  model.SelectGameById(req, res, (err, data) => {
  callback(err, data);
  });
};

gameController.GetUsersGames = (req, res, callback) => {
  model.SelectGamesByUser(req, res, (err, data) => {
  callback(err, data);
  });
};

gameController.CreateGame = function(req, res) {
  model.InsertGame(req, res);
};

gameController.CreateTeam = (req, res, callback) => {
  model.InsertTeam(req, res, (err, data) => {
  callback(err, data);
  });
};

gameController.SetScore = (req, res, callback) => {
  model.UpdateScore(req, res, (err, data) => {
  callback(err, data);
  });
};

module.exports = gameController;
