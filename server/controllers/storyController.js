const { createError, validateFields } = require('../utils/constants.js');
const Story = require('../models/StoryModel.js');
require('dotenv').config();

const teacherStory = {};

teacherStory.createStory = async (req, res, next) => {
  try {
    const isValid = validateFields(req.body, 'story');
    if (isValid) {
      const { title, description } = req.body;
      await Story.create({
        image: req.file.location,
        title,
        description,
        userId: req.user._id,
      });
      return next();
    } else {
      return next(createError({ message: { err: 'Invalid fields' } }));
    }
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

teacherStory.getAllStories = async (req, res, next) => {
  try {
    const stories = await Story.find().populate({
      path: 'userId',
      select: '_id email firstName lastName',
      populate: {
        path: 'address',
        select: 'schoolName street city postalCode',
      },
    });
    res.locals.stories = stories;
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

teacherStory.getTeacherStories = async (req, res, next) => {
  try {
    const stories = await Story.find({ userId: req.user._id }).populate({
      path: 'userId',
      select: '_id email firstName lastName',
      populate: {
        path: 'address',
        select: 'schoolName street city postalCode',
      },
    });
    res.locals.stories = stories;
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

teacherStory.updateStory = async (req, res, next) => {
  try {
    const isValid = validateFields(req.body, 'story', 'update');
    if (isValid) {
      const body = { ...req.body };
      if (req.file) body.image = req.file.location;
      await Story.findOneAndUpdate({ _id: req.query.story_id }, body);
      return next();
    } else {
      return next(createError({ message: { err: 'Invalid fields' } }));
    }
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

teacherStory.deleteStory = async (req, res, next) => {
  try {
    const deleted = await Story.deleteOne({ _id: req.query.story_id });
    return deleted.acknowledged && next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

module.exports = teacherStory;
