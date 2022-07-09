const express = require('express');
const path = require('path');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const startDb = require('./database/db.js');

const authRouter = require('./routes/AuthRoute.js');
const listRouter = require('./routes/ListRoute.js');
const storyRouter = require('./routes/StoryRoute.js');
const userRouter = require('./routes/UserRoute.js');
const uploadRouter = require('./routes/uploadRoute.js');

const PORT = 3000;
const app = express();

//middlewares
app.use(cookieParser());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', authRouter);
app.use('/api', listRouter);
app.use('/api', storyRouter);
app.use('/api', userRouter);
app.use('/api', uploadRouter);

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.message.err);
  return res
    .status(errorObj.status)
    .json({ status: errorObj.status, ...errorObj.message });
});

/**
 * start server
 */
app.listen(PORT, () => {
  startDb();
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
