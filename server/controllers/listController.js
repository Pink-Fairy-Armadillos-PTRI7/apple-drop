const { createError, validateFields } = require('../utils/constants.js');

require('dotenv').config();

const teacherList = {};

teacherList.uploadListImages = async (req, res, next) => {
  try {
    await req.files;

    const locations = req?.files.map((file) => {
      console.log(file);
      return { location: file?.location, name: file.originalname };
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
