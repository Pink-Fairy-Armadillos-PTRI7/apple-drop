const { Router } = require('express');
const userController = require('../controllers/userController.js');
const auth = require('../middlewares/Authorization');

const router = Router();

router.get('/users', userController.getAllUser, (req, res) => {
  return res.status(200).json(res.locals.users);
});

router.get('/user/:id', auth, userController.getUserProfile, (req, res) => {
  return res.status(200).json(res.locals.userProfile);
});

router.patch(
  '/user/:id',
  auth,
  userController.updateUserProfile,
  (req, res) => {
    return res.status(200).json({ status: 'success' });
  }
);

router.delete('/user/:id', auth, userController.deleteProfile, (req, res) => {
  return res.status(200).json(res.locals.userProfile);
});

module.exports = router;
