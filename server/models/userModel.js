const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const constants = require('../utils/constants.js'); // => createError()

const userSchema = new Schema({
  prefix: { type: String, enum: ['Ms.', 'Mrs.', 'Mr.', 'Mx'] },
  email: { type: String, required: true, unique: true },
  prefix: {type: String, required: true}, 
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err)
      return next(constants.createError({ message: { err: err.message } }));
    this.password = hash;
    return next();
  });
});

module.exports = mongoose.model('User', userSchema);
