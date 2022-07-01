const User = require("../models/userModel");
const Address = require("../models/addressModel");
const constants = require("../utils/constants.js"); // => createError(), validateFields()
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
      street,
      city,
      postalCode,
    } = req.body;

    const isValid = constants.validateFields(req.body, "signup");

    if (!isValid)
      return next(
        constants.createError({
          message: { err: "Invalid input" },
          status: 400,
        })
      );

    let user = await User.create({ email, password, firstName, lastName });

    const address = await Address.create({
      schoolName,
      street,
      city,
      postalCode,
      user: user.id,
    });

    await User.findOneAndUpdate({ email }, { address: address.id });

    user = await User.findOne({ email }).populate({
      path: "address",
      select: "schoolName street city postalCode",
    });

    res.locals.user = user;
    return next();
  } catch (error) {
    return next(constants.createError({ message: { err: error.message } }));
  }
};





userController.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

  const isValid = constants.validateFields(req.body, "login");


    if (!isValid) {
      return next(
        constants.createError({
          message: { err: "Invalid input" },
          status: 400,
        }))
    } 

    const user = await User.findOne({email}).populate({
      path: "address",
      select: "schoolName street city postalCode",
    });


    if (!user) {
      return next(constants.createError({message: { err: "user does not exist"}, status: 404}))
    } else {
      bcrypt.compare(password, user.password).then((result) => {

        if (result) {
          res.locals = { ...res.locals, user};
          return next();
        } else {
          return next(createError({message: { err: 'email or password mismatch'}}))
        }
      })
    }

  } catch (error) {
    return next(constants.createError({ message: { err: error.message } }));
  }
}

module.exports = userController;
