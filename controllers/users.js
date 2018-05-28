const { Router } = require ('express');
const model = require ('../models/users');
const usersController = Router();
// module.exports = class UserCtrl
// { // el req del routes users
//   create (req)
//   {
//     let user = model(req);
//     // y con esta variable ya haria lo que quisiera
//   }
//
//   return
//   {
//     status: ok,
//     res: user,
//   }
// }

usersController.create = function(req, res) {
  var response = model.create(req.body.username,req.body.email,req.body.password);
  return response;
};

usersController.listAll = function(req, res) {
  console.log('chuuuuuuuuuuuuu');
  var response = model.listAll();
  return response;
};

usersController.getById = function(req, res) {
  var response = model.getById(req.params.userId);
  return response;
};

// usersController.blockUser = function(req, res){
//   var response = model.blockUser(req.params.userId);
//   return response;
// };


module.exports = usersController;

//recibe aalgun request, hace logica y llama al modelo
//con todo validado se decide si se llama al modelo para porder insertar en la db
