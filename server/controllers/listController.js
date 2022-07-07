const { createError, validateFields } = require('../utils/constants.js');

require('dotenv').config();

const teacherList = {};

teacherList.uploadListImages = async (req, res, next) => {

  try {
    if (!req.body.title && !req.body.description) {
      return next();
    }
    if (Array.isArray(req.body.title) && Array.isArray(req.body.description)) {
      return next();
    }
    const locations = req?.files.map((file, index) => {
      return { title: req.body.title[index], description: req.body.description[index], location: file?.location, name: file.originalname };
    });
    res.locals.images = locations;
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

teacherList.createList = (req, res, next) => {
  try {
    console.log(req.files, req.file, req.body);

    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

module.exports = teacherList;
