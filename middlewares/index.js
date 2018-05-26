let includeTime = function includeTime (req, res, next){
  req.myTime = Date();
  next();
}

let validateToken = function validateToken (req, res, next){
  req.token = 'donshirito';
  next();
}

module.exports = {includeTime, validateToken};

//agregar el momento en el que se crea la partida dia/mes/año/hora/minuto/segundo
//y lo mismo para cada movimiento de la articulación
