const jwt = require('jsonwebtoken');
const { createError } = require('../utils/constants.js');

const auth = async (req, res, next) => {
  if (req) {
    const authorization = req.header('Authorization');

    if (!req.params.id)
      return next(createError({ message: { err: 'No id provided' } }));

    if (!authorization) {
      return next(
        createError({
          status: 401,
          message: { err: 'No authorization is set' },
        })
      );
    }
    const token = authorization.replace('Bearer ', '');
    try {
      const data = jwt.verify(token, process.env.SECRET);

      if (data && data._id) {
        if (data._id === req.params.id) {
          req.user = data;
          return next();
        } else {
          return next(
            createError({ status: 403, message: { err: 'Forbidden' } })
          );
        }
      } else {
        return next(
          createError({
            status: 401,
            message: { err: 'Token is invalid' },
          })
        );
      }
    } catch (e) {
      return next(
        createError({
          status: 401,
          message: { err: 'Token is expired' },
        })
      );
    }
  }
};

module.exports = auth;
