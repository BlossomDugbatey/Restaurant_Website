//require express
const express = require('express')
//requiring our pageController file 
const controller = require('../controllers/pageController')
//creating a variable that holds object for declaring routes within applications 
const pageRoute = express.Router()

//All routes for views in pages
pageRoute.get('/', controller.home)
pageRoute.get('/our-story', controller.ourStory)

module.exports = pageRoute;
