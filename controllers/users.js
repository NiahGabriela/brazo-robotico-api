const { Router } = require ('express');
const model = require ('../models/users');
const usersController = Router();

usersController.create = function(req, res) {
  var response = model.create(req.body.username,req.body.email,req.body.password);
  return response;
};

usersController.listAll = (req, res, callback) => {
  model.listAll(req, res, (err, data) => {
  callback(err, data);
  });
};


usersController.getById = (req, res, callback) => {
  model.getById(req, res, (err, data) => {
    callback(err, data);
  });
};

// usersController.blockUser = function(req, res){
//   var response = model.blockUser(req.params.userId);
//   return response;
// };


module.exports = usersController;

//recibe aalgun request, hace logica y llama al modelo
//con todo validado se decide si se llama al modelo para porder insertar en la db
