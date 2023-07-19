const router = require('express').Router();
const bodyParser = require('body-parser');
const check=require('express-validator').check

const authController=require('../controllers/auth.controller')

router.get('/signup',authController.getSignup )

router.post('/signup',
// i use bodyParser to get data from form and this is middle where and i use bodyParser to use model qs instead of query string    
bodyParser.urlencoded({ extended: true }),
check('username').not().isEmpty().withMessage('Enter your name'),
check('email').not().isEmpty().withMessage('Enter your email').isEmail().withMessage('Enter valid Email'),
check('password').not().isEmpty().withMessage('Enter Password').isLength({min: 6}).withMessage('min length is 6'),
check('confirmPassword').custom((value,{req})=>{
    if(value == req.body.password) return true
    else throw 'confirmPassword is not equal password'
}),
authController.postSignup
)

router.get('/login',authController.getLogin )

router.post('/login',
bodyParser.urlencoded({ extended: true }),
authController.postLogin
)

// if the user make any of post or get to handlr this router
router.all('/logout', authController.logout)


module.exports = router