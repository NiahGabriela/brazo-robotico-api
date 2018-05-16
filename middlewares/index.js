let includeTime = function includeTime (req, res, next){
  req.myTime = Date.now();
  next();
}

let validateToken = function validateToken (req, res, next){
  req.token = 'donshirito';
  next();
}

module.exports = {includeTime, validateToken};
