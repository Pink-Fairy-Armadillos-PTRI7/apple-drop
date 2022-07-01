const { Router } = require('express');
const userController = require('../controllers/userController');



const router = Router();


router.post('/signup', userController.signUp, (req, res) => {
    return res.status(200).json({status: 200, user: res.locals.user })
})

router.post('/signin', userController.signIn, (req, res) => {
    return res.status(200).json({status:200, ...res.locals })
})


module.exports = router;