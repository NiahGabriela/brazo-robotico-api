const { Router } = require ('express');
const gamesRouter = Router();

// todas las rutas para las partidas, pero no tiene que ver con las articulaciones,
// es unicamente el id del juego y quienes participan en el

//de todos los juegos jugados para que vea el admin chulo
gamesRouter.get('/', (req, res) => {
  res.send('This is the list of all games');
});

//De un juego en especifico para consulta del admin guapo
gamesRouter.get('/:gameId', (req, res) => {
  res.send(`This is the game ${req.params.gameId}`);
});

//Todas las partidas de un usuario, devuelve para el usuario si gano o perdio, la fecha, compañeros
gamesRouter.get('/:userId', (req, res) => {
  res.send(`This are the game from user ${req.params.userId}`);
});

//Se crea un nueva partida cuando hay alguien en la sala de espera
gamesRouter.post('/', (req, res) => {
  res.send(`Start a new game with the data ${req.body}`);
});

//se asigna una articulación al usuario cuando ingresa a un juego
gamesRouter.put('/:userId', (req, res) => {
  res.send(`Assigns an articulation for the user ${req.params.gameId} the articulation is `);
});

//se asigna a la partida si fue ganada o perdida cuando esta termina
gamesRouter.put('/:gameId', (req, res) => {
  res.send(`The game ${req.params.gameId} has been lost or won `);
});

module.exports = gamesRouter;
