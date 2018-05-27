const model = require ('../models/users');

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

exports.create = function(req, res) {
  var response = model.create(req.body.username,req.body.email,req.body.password);
  return response;
};

exports.listAll = funcion(req, res) {
  var response = model.listAll();
  return response;
}

//recibe aalgun request, hace logica y llama al modelo
//con todo validado se decide si se llama al modelo para porder insertar en la db
