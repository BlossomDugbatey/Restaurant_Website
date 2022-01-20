//require express
const express = require('express')
//require controller
const controller = require('../controllers/menuController')
const menuRoute = express.Router()

//routes for views in menus
menuRoute.get('/menu', controller.menu)

module.exports = menuRoute;