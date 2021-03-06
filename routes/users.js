const { Router } = require ('express');
const ctrl = require ('../controllers/users');
const middleware = require('../middlewares');
const usersRouter = Router();

// todos los usuarios para que el admin los consulte
usersRouter.get('/', (req, res, callback) => {
  ctrl.listAll(req, res, (err, data) => {
    res.json(data);
    console.log(data);
    // return data;
    });
  //el response debe traer una lista de todos los usuarios que se encuentran en la tabla
});

// información de un usuario en especifico, para su perfil o para que el admin lo consulte
usersRouter.get('/:userId', (req, res, callback) => {
  ctrl.getById(req, res, (err, data) => {
    res.json(data);
    console.log(data);
  //la respuesta debe traer toda la info de un usuario que coincida con el id, el request debe trer el id desde el front
  });
});


//para que el usuario modifique sus datos o para que el admin lo pueda bloquear o desbloquear
usersRouter.put('/:userId', (req, res) => {
  console.log(req);
  //la respuesta debe traer un mensajito de si se hizo o no, este endpoint es únicamente será para cuando se requieran modificar
  //las banderas de bloqueado o desbloqueado cuando un usuario es mugroso falta el endpoint para cuando se modifican los datos del
  //usuario en su perfil, pero como no tenemos la vista no lo voy a hacer (emoji de manitas -o- ese que me gusta)
  var response = ctrl.blockUser(req, res);
  res.send(`This is the edition of the permissions for the user ${req.params.userId} ` );
  // res.send(`This is the edition of the user ${req.params.userId} with the data ${req.body}` );
});

//para crear un nuevo usuario
usersRouter.post('/', (req, res) => {
  console.log('impresion para saber que esta funcionando');
  var response = ctrl.create(req, res);
});

module.exports = usersRouter;


//JWT para los tokens, para express js y como usarlo
//no auh? algo asi para el postman |
// y subir la colección de postman al readme
