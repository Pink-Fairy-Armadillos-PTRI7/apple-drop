const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const startDb = require('./database/db.js');

const authRouter = require('./routes/AuthRoute.js');

const PORT = 3000;
const app = express();


//middlewares
app.use(cors());



app.use(express.json());
app.use(cookieParser());



app.use('/api', authRouter);

app.use((req, res) => res.sendStatus(404));





app.use((err, req, res, next) => {
  
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.message.err);
  return res.status(errorObj.status).json({ status: errorObj.status,  ...errorObj.message });
});


/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  
startDb();
  
module.exports = app;