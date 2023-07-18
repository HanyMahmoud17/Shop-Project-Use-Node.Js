const router = require('express').Router();
const bodyParser = require('body-parser');

const authController=require('../controllers/auth.controller')

router.get('/signup',authController.getSignup )

router.post('/signup',
// i use bodyParser to get data from form and this is middle where and i use bodyParser to use model qs instead of query string    
bodyParser.urlencoded({ extended: true }),
authController.postSignup
)

router.get('/login',authController.getLogin )

router.post('/login',
bodyParser.urlencoded({ extended: true }),
authController.postLogin
)


module.exports = router