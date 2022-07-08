const uploader = require('../middlewares/uploadHandler.js');
const { Router } = require('express');
const auth = require('../middlewares/Authorization.js');

const router = Router();

router.post('/upload/:id', auth, uploader, function (req, res) {
  return res.status(200).json(res.locals.images);
});

module.exports = router;
