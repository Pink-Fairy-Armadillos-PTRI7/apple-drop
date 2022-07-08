const { Router } = require('express');
const storyController = require('../controllers/storyController');
const auth = require('../middlewares/Authorization');
const upload = require('../middlewares/uploadHandler');

const router = Router();

router.get('/stories', storyController.getAllStories, (req, res) => {
  return res.status(200).json(res.locals.stories);
});

router.get(
  '/myStories/:id',
  auth,
  storyController.getTeacherStories,
  (req, res) => {
    return res.status(200).json(res.locals.stories);
  }
);

router.post(
  '/story/:id',
  auth,

  storyController.createStory,
  (req, res) => {
    return res.status(200).json({ status: 'success', image: res.locals.image });
  }
);
router.patch(
  '/story/:id',
  auth,
  upload,
  storyController.updateStory,
  (req, res) => {
    return res.status(200).json({ status: 'success' });
  }
);

router.delete('/story/:id', auth, storyController.deleteStory, (req, res) => {
  return res.status(200).json({ status: 'success' });
});

module.exports = router;
