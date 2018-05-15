const { Router } = require('express');
const routes = Router();
const bodyParser = require('body-parser');
const usersRouter = require ('./users');

//usando el bodyParser para el middleware
routes.use(bodyParser.urlencoded({ extended: false}));
routes.use(bodyParser.json());

//agregar todos los modulos que haya creado
routes.get('/', (req, res) => res.send ('El home'));
routes.use('/users', usersRouter);

module.exports = routes;
