const { Router } = require ('express');
const database = require('../database');
const movementsModel = Router();

movementsModel.SelectPositions = (req, res, callback) => {
  let columns = 'p1, p2, p3';
  let condition = 'idActualEstate=\'' + req.params.idActualEstate + '\'';
  database.SELECT('ActualEstate', columns, condition, (err, data) => {
  callback(err, data);
  });
};

module.exports = movementsModel;
