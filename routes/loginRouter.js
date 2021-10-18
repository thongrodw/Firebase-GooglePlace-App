var express = require('express');
const { route } = require('.');
var router = express.Router();
const controller = require('../controllers/loginControl')

//Login Router
router.post('/signup', controller.signUp)

//Login Email
router.post('/login', controller.loginByEmail)

//Login Google
router.post('/login/google', controller.loginByGoogle)

module.exports = router;