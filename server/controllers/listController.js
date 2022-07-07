const { createError, validateFields } = require('../utils/constants.js');
const List = require('../models/ListModel');

require('dotenv').config();

const teacherList = {};

teacherList.creteUploadListImages = async (req, res, next) => {
  try {
    console.log('file', req.body)
    if (!req.body.title && !req.body.description) {
      return next();
    }
    if (!Array.isArray(req.body.title) && !Array.isArray(req.body.description)) {
      return next(createError({ message: { err: 'Invalid fields' } }));
    }

    const locations = req?.files.map((file, index) => {
      return { title: req.body.title[index], description: req.body.description[index], location: file?.location, name: file.originalname };
    });
    await List.create({ userId: req.user._id, list: locations })
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }

};

teacherList.getLists = async (req, res, next) => {
  try {
    const listItems = await List.find({ userId: req.user._id });
    res.locals.images = listItems;
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

// Update List by Id
teacherList.updateList = async (req, res, next) => {
  try {
    // how to update each list by Id
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

// Delete List by Id
teacherList.deleteList = async (req, res, next) => {
  try {
    // how to delete each list by Id
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

module.exports = teacherList;
