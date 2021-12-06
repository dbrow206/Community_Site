const express = require('express');
const controller = require('../controllers/userController');
const {isGuest, isLoggedIn} = require('../middlewares/auth');
const {logInLimiter } = require('../middlewares/rateLimiters');
const { validateSignUp, validateResult, validateLogin } = require('../middlewares/validators');
const router = express.Router();


router.get('/new', isGuest, controller.new);

router.post('/', isGuest, validateSignUp, validateResult, controller.create);

router.get('/login',logInLimiter, isGuest, controller.getUserLogin);

router.post('/login',logInLimiter, isGuest, validateLogin, validateResult, controller.login);

router.get('/profile',isLoggedIn, controller.profile);

router.get('/logout',isLoggedIn, controller.logout);

module.exports = router;