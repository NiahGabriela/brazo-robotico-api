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

gameController.CreateGame = (req, res, callback) => {
  model.InsertGame(req, res, (err, data) => {
  callback(err, data);
  });
};

module.exports = gameController;
