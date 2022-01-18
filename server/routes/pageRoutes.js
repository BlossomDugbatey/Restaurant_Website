//require express
const express = require('express')
//requiring our pageController file 
const controller = require('../controllers/pageController')
//creating a variable that holds object for declaring routes within applications 
const pageRoute = express.Router()

pageRoute.get('/', controller.home)

module.exports = pageRoute;