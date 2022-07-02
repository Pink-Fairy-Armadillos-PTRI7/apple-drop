const User = require('../models/userModel');
const Story = require('../models/StoryModel');
const List = require('../models/ListModel');
const Address = require('../models/addressModel');
const constants = require('../utils/constants.js'); // => createError(), validateFields()
const createToken = require('../utils/createToken');
const bcrypt = require('bcryptjs');

const userController = {};

userController.signUp = async (req, res, next) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      schoolName,
      phoneNumber,
      street,
      city,
      state,
      postalCode,
    } = req.body;

    const isValid = constants.validateFields(req.body, 'signup');

    if (!isValid)
      return next(
        constants.createError({
          message: { err: 'Invalid input' },
          status: 400,
        })
      );

    let user = new User({ email, password, firstName, lastName });

    await user.save();

    const address = await Address.create({
      schoolName,
      street,
      city,
      postalCode,
      user: user._id,
      state,
      phoneNumber,
    });

    await User.findOneAndUpdate({ email }, { address: address._id });

    user = await User.findOne({ email });

    if (user) {
      res.locals.user = { ...user._doc, token: createToken(user) };
      return next();
    }
  } catch (error) {
    return next(constants.createError({ message: { err: error.message } }));
  }
};

userController.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const isValid = constants.validateFields(req.body, 'login');

    if (!isValid) {
      return next(
        constants.createError({
          message: { err: 'Invalid input' },
          status: 400,
        })
      );
    }
    const user = await User.findOne({ email });

    if (!user) {
      return next(
        constants.createError({
          message: { err: 'user does not exist' },
          status: 404,
        })
      );
    } else {
      bcrypt.compare(password, user.password).then((result) => {
        if (result) {
          res.locals.user = { token: createToken(user), ...user._doc };
          return next();
        } else {
          return next(
            constants.createError({
              message: { err: 'email or password mismatch' },
            })
          );
        }
      });
    }
  } catch (error) {
    return next(constants.createError({ message: { err: error.message } }));
  }
};
userController.getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.locals.users = users;
    return next();
  } catch (error) {
    return next(constants.createError({ message: { err: error.message } }));
  }
};

userController.getUserProfile = async (req, res, next) => {
  try {
    const userProfile = await User.findOne({ _id: req.user._id }).populate({
      path: 'address',
      select: 'schoolName street city postalCode phoneNumber state',
    });
    res.locals.userProfile = userProfile;
    return next();
  } catch (error) {
    return next(constants.createError({ message: { err: error.message } }));
  }
};

// Update User Profile

userController.updateUserProfile = async (req, res, next) => {
  try {
    const isValid = constants.validateFields(req.body, 'signup', 'update');
    if (isValid) {
      body = { ...req.body };
      await User.findOneAndUpdate({ _id: req.params.id }, body);
      return next();
    }
  } catch (error) {
    return next(constants.createError({ message: { err: error.message } }));
  }
};
// Delete User Profile

userController.deleteProfile = async (req, res, next) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    await Address.deleteOne({ user: req.params.id });
    await Story.deleteOne({ userId: req.params.id });
    await List.deleteOne({ userId: req.params.id });
    return next();
  } catch (error) {
    return next(constants.createError({ message: { err: error.message } }));
  }
};
module.exports = userController;
