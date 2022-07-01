const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connection.on('disconnected', (error) => {
  console.warn(`lost database connection`);
});

mongoose.connection.on('reconnect', () => {
  console.log('-> database reconnected');
});

mongoose.connection.on('error', (error) => {
  console.error(`Could not connect because of ${error}`);
  process.exit(-1);
});

const startDB = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on('connected', () => {
    console.log('Database connected');
  });
};

module.exports = startDB;