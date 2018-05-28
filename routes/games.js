const { Router } = require ('express');
const gamesRouter = Router();
const ctrl = require ('../controllers/games');
const middleware = require('../middlewares');

// todas las rutas para las partidas, pero no tiene que ver con las articulaciones,
// es unicamente el id del juego y quienes participan en el

//de todos los juegos jugados para que vea el admin chulo
gamesRouter.get('/', (req, res, callback) => {
  ctrl.SelectGames(req, res, (err, data) => {
  res.json(data);
  console.log(data);
  });
});

//De un juego en especifico para consulta del admin guapo
gamesRouter.get('/:gameId', (req, res, callback) => {
  ctrl.GetGame(req, res, (err, data) => {
    res.json(data);
    console.log(data);
  });
});
//FALTA ==============================================================================================
//Todas las partidas de un usuario, devuelve para el usuario si gano o perdio, la fecha, compañeros
gamesRouter.get('/:userId', (req, res) => {
  res.send(`This are the game from user ${req.params.userId}`);
});
//FALTA ==============================================================================================
//Se crea un nueva partida cuando hay alguien en la sala de espera
gamesRouter.post('/', middleware.includeTime, (req, res, callback) => {
  ctrl.CreateGame(req, res, (err, data) => {
    res.send('Game cargado a la base de datos');
  });
});

//se asigna una articulación al usuario cuando ingresa a un juego
gamesRouter.post('/team/:player/:gameLogId', (req, res, callback) => {
  ctrl.CreateTeam(req, res, (err, data) => {
  });
});

//se asigna a la partida si fue ganada o perdida cuando esta termina
gamesRouter.put('/team/:idTeam/:score', (req, res) => {
  ctrl.SetScore(req, res);
  // res.send(`The game ${req.params.gameId} has been lost or won `);
});

module.exports = gamesRouter;
