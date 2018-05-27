var db = require('../database');
// module.exports = class User
// {
//   constructor(userName, email, password)
//   {
//     /// falta programar :D
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//
//     this db.insert();
//   }
// }

exports.create = function(username, email, password) { //acomodar bien la funcion
  var age,gender,active,permisosChidos;
  age=null; gender=null; active=null; permisosChidos=false;
  var response = db.INSERT(`User`, //nombre de la base de datos
  `name,age,gender,email,active,permisosChidos`, // columnas de la base de la tabla
  `\'${username}\',\'${age}\',\'${gender}\',\'${email}\',\'${active}\',\'${password}\'`, //valores para rellenar
  null,
  `*`);
  return response;
  };

  exports.listAll = funcion(){

  }

//se ecarga del modelo del negocio y mandar
//todo a la base de datos
