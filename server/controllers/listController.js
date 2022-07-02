const fs = require('fs');

const { createError, validateFields } = require('../utils/constants.js');

require('dotenv').config();

const teacherList = {};

teacherList.createList = (req, res, next) => {
  try {
    console.log(req.file, req.body);

    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

module.exports = teacherList;
