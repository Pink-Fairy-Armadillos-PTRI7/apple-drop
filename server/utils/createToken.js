const jwt = require('jsonwebtoken');

const createToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.SECRET,
    {
      expiresIn: 86400,
    }
  );
};

module.exports = createToken;
