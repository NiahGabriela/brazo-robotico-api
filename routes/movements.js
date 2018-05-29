const { Router } = require ('express');
const middleware = require('../middlewares');
const movementsRouter = Router();
const ctrl = require ('../controllers/movements');


// para solicitar todas los movimientos de una partida en especifico, sería algo que vería el admin
// movementsRouter.get('/:gameId', middleware.includeTime, (req, res) => {
//   //res.send(`This is are the movements of the game ${req.params.gameId}`);
//   res.send('El timestamp' + req.myTime);
// });

//deberá devolver la nueva ubicación de la articulación que se trate una vez que se movio y avisar si
//se alcanzó el objetivo
movementsRouter.get('/:idActualEstate', (req, res, callback) => {
  ctrl.GetPositions(req, res, (err, data) => {
    res.json(data);
    console.log(data);
  });

});

//se crearia un nuevo movimiento cada que se mueva el bracito,
// movementsRouter.post('/:artId',  middleware.includeTime, (req, res) => {
//   res.send(`New movement from articulation ${req.params.artId} `);
// });

module.exports = movementsRouter;
