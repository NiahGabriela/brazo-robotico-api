const { Router } = require ('express');
const db = require('../database');
const usersModel = Router();
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

usersModel.create = function(username, email, password) { //acomodar bien la funcion
  var age,gender,active,permisosChidos;
  age=null; gender=null; active=null; permisosChidos=false;
  var response = db.INSERT(`User`, //nombre de la base de datos
  `name,age,gender,email,active,permisosChidos`, // columnas de la base de la tabla
  `\'${username}\',\'${age}\',\'${gender}\',\'${email}\',\'${active}\',\'${password}\'`, //valores para rellenar
  null,
  `*`);
  return response;
};

usersModel.listAll = function(){
    var response = db.SELECT(`User`, //la tabla
        `name`,// la columna
        null, //no le pasamos ningun valor
        null,
        `*`);
        console.log("holi");
      return response;
};

usersModel.getById = function(condition){
    var response = db.SELECT(`User`, //la tabla
        `name,age,gender,email`, // columnas de la base de la tabla que quiero recuperar
        null, //nada porque no le vamos a modificar nada
        `idUser = ${condition}`,
        `*`);
      return response;
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
