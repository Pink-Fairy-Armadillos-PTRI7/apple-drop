const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listItemSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: { type: String, required: true },
    list: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        name: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('ListItem', listItemSchema);
