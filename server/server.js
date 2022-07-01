const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const startDb = require('./database/db.js')

const PORT = 3000;
const app = express();


//middlewares
app.use(cors());




/**
 * start server
 */
 app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
 });
  
startDb();
  
  module.exports = app;