const {Router} = require ('express');
const movementController = Router();
const model = require ('../models/movements');


movementController.GetPositions = (req, res, callback) => {
  model.SelectPositions(req, res, (err, data) => {
  callback(err, data);
  });
};

module.exports = movementController;
