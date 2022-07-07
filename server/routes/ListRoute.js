const { Router } = require('express');
const listController = require('../controllers/listController');
const auth = require('../middlewares/Authorization');
const upload = require('../middlewares/uploadHandler');

const router = Router();

// router.post('/list/:id', auth, listController.createList, (req, res) => {
//   return res.status(200).json({ status: 'lets see' });
// });

router.post(
  '/list/upload/:id',
  auth,
  upload.array('image'),
  listController.creteUploadListImages,
  (req, res) => {
    return res.status(200).json({ status: 'success' });
  }
);

router.get(
  '/list/:id',
  auth,
  listController.getLists,
  (req, res) => {
    return res.status(200).json(res.locals.images);
  }
);

module.exports = router;
