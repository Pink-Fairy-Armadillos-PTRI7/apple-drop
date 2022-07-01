const User = require('../models/userModel');
const Address = require('../models/addressModel');
const constants = require('../utils/constants.js'); // => createError(), validateFields()
const bcrypt = require('bcryptjs');

const userController = {};

userController.signUp = async (req, res, next) => {
  try {
    // Destructure request data from the request body
    const { email, password, firstName, lastName, schoolName, street, city, postalCode } = req.body;
    // Validate fields (that they all exist)
    const isValid = constants.validateFields(req.body, 'signup');
    // Create an error when there were insufficient fields
    if (!isValid) return next(constants.createError({ message: { err: 'Invalid input' }, status: 400 }));
    // Attempt to sign them up with the reqest data
    // const address = await Address.create({ schoolName, street, city, postalCode });
    await User.create({ email, password, firstName, lastName });
      const user = await User.findOne({ email });
    res.locals.user = user;
    return next();
  } catch (error) {
      return next(constants.createError({message: {err: error.message}}));
  }
}

module.exports = userController;
