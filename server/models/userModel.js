const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const constants = require('../utils/constants.js'); // => createError()

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  addressId: {
    type: Schema.Types.ObjectId,
    ref: "Address",
   // required: true
  }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
      if (err) return next(constants.createError({message: {err: err.message}}));
      this.password = hash;
      return next();
    });
});
  


module.exports = mongoose.model("User", userSchema);