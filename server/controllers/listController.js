const { createError, validateFields } = require('../utils/constants.js');

const List = require('../models/ListModel.js');

require('dotenv').config();

const teacherList = {};

teacherList.createList = async (req, res, next) => {
  try {
    await List.create({
      userId: req.user._id,
      name: req.body.name,
      list: req.body.list,
    });

    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

teacherList.getList = async (req, res, next) => {
  try {
    const list = await List.find({ userId: req.user._id });
    res.locals.list = list;
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

module.exports = teacherList;
