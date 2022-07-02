const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  schoolName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Address', addressSchema);
