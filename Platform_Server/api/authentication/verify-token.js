const jwt = require('jsonwebtoken');
const config = require('../../config/config');

verifyToken = (request, response, next) => {
  
  if (!request.headers.authorization) return response.status(403).send({
    IsUserAuthenticated: false,
    message: 'Authorization header missing'
  });

  const token = request.headers.authorization.split(' ')[1];

  if (!token) return response.status(403).send({
    IsUserAuthenticated: false,
    message: 'No token provided.'
  });

  jwt.verify(token, config.secret, (error, decoded) => {
    if (error)
    return response.status(500).send({  
        IsUserAuthenticated: false,
        message: 'Failed to authenticate token.'
    });

    // if everything good, save 'UserId' to request for use in other routes
    request.UserId = decoded.UserId;

    next();
  });
}
module.exports = verifyToken;