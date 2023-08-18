const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);

router.get('/login', controller.login);

router.get('/signup', controller.signup);

router.post('/signup', controller.postSignup);

router.post('/login', controller.postLogin);

// router.get('/profile', controller.profile);

module.exports = router;
