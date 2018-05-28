const { Router } = require ('express');
const db = require('../database');
const usersModel = Router();

usersModel.create = function(username, email, password) { //acomodar bien la funcion
  var age,gender,active,permisosChidos;
  age=15; gender="F"; active=1; permisosChidos=0; //para hacer insert de los datos nulos la DB se queja si los dejas en nulos por eso tiene
  //valores por defecto que parecen reales
  var response = db.INSERT(`User`, //nombre de la base de datos
  `name,age,gender,email,active,permisosChidos,password`, // columnas de la base de la tabla
  `\'${username}\',\'${age}\',\'${gender}\',\'${email}\',\'${active}\',\'${permisosChidos}\',\'${password}\'`, //valores para rellenar
  null,
  `*`);
  return response;
};

usersModel.listAll = (req, res, callback) => {
  let columns = 'idUser, name';//columnas a recuperar de la db
  let condition = null;
  db.SELECT('User', columns, condition, (err, data) => {
  callback(err, data);
  });
};

usersModel.getById = (req, res, callback) => {
  let columns = 'name,age,gender,email';//columnas a recuperar de la db
  let condition = 'idUser= \''+req.params.userId+'\'';
  db.SELECT('User', columns, condition, (err, data) => {
  callback(err, data);
  });
};

// usersModel.blockUser = function(condition,active){
//   var response = db.UPDATE(`User`, //la tabla
//       `active`, // columnas de la base de la tabla que quiero recuperar
//       null, //nada porque no le vamos a modificar nada
//       `idUser = ${condition}`,
//       `*`);
//     return response;
//
// };


module.exports = usersModel;

//se ecarga del modelo del negocio y mandar
//todo a la base de datos
