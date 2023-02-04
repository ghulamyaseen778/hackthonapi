const express = require('express');
const route = express.Router();
const {AuthControllers} = require('../controllers/authController')

route.post('/signup',AuthControllers.SignUpController)
route.post('/login',AuthControllers.LoginController)

module.exports=route