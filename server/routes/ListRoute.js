const { Router } = require('express');
const listController = require('../controllers/listController');
const auth = require('../middlewares/Authorization');

const router = Router();

router.post('/list/:id', auth, listController.createList, (req, res) => {
  return res.status(200).json({ status: 'success' });
});
router.get('/list/:id', auth, listController.getList, (req, res) => {
  return res.status(200).json(res.locals.list);
});

router.get('/lists', listController.getAllList, (req, res) => {
  return res.status(200).json(res.locals.list);
});

module.exports = router;
