const {Router} = require ('express');
const gameController = Router();
const model = require ('../models/games');

gameController.create = function(req, res) {
  var response = model.create(req.body.gameLogId,req.myTime);
  return response;
};

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

module.exports = gameController;
