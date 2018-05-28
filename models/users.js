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
  age=15; gender="F"; active=1; permisosChidos=0; //para hacer insert de los datos nulos la DB se queja si los dejas en nulos por eso tiene
  //valores por defecto que parecen reales
  var response = db.INSERT(`User`, //nombre de la base de datos
  `name,age,gender,email,active,permisosChidos,password`, // columnas de la base de la tabla
  `\'${username}\',\'${age}\',\'${gender}\',\'${email}\',\'${active}\',\'${permisosChidos}\',\'${password}\'`, //valores para rellenar
  null,
  `*`);
  return response;
};

usersModel.listAll = function(){
    var response = db.SELECT(`User`, //la tabla
        `name`,// la columna
        null, //no le pasamos ningun valor
        null, //condicion
        `*`); //returnung?
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
