const { Router } = require ('express');
const usersRouter = Router();

// todas las rutas
usersRouter.get('/', (req, res) => {
  res.send('This is the list of all users');
});

usersRouter.get('/:userId', (req, res) => {
  res.send(`This is the user ${req.params.userId}`);
});

usersRouter.put('/:userId', (req, res) => {
  res.send(`This is the edition of the user ${req.params.userId} with the data ${req.body}` );
});

usersRouter.post('/', (req, res) => {
  res.send(`Create a new user with the data ${req.body}`);
});

module.exports = usersRouter;
