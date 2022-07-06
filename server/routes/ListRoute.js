const { Router } = require('express');
const listController = require('../controllers/listController');
const auth = require('../middlewares/Authorization');
const upload = require('../middlewares/uploadHandler');

const router = Router();

router.post(
  '/list/:id',
  auth,
  upload.single('image'),
  listController.createList,
  (req, res) => {
    return res.status(200).json({ status: 'lets see' });
  }
);

module.exports = router;
