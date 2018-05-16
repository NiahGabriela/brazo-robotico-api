const { Router } = require ('express');
//const ctrl = require ('../controllers/users');
const middleware = require('../middlewares');
const usersRouter = Router();

// todos los usuarios para que el admin los consulte
usersRouter.get('/', middleware.includeTime, (req, res) => {
  res.send('This is the list of all users' + req.myTime + req.token);
});

//información de un usuario en especifico, para su perfil o para que el admin lo consulte
usersRouter.get('/:userId', (req, res) => {
  res.send(`This is the user ${req.params.userId}`);
});

//para que el usuario modifique sus datos o para que el admin lo pueda bloquear o desbloquear
usersRouter.put('/:userId', (req, res) => {
  res.send(`This is the edition of the user ${req.params.userId} with the data ${req.body}` );
});

//para crear un nuevo usuario
usersRouter.post('/', (req, res) => {
  let resp = ctrl.create(req);
  res.send(resp);
});

module.exports = usersRouter;
