//require express
const express = require('express')
//require controller
const controller = require('../controllers/menuController')
const menuRoute = express.Router()

//routes for views in menus
//display menu homepage
menuRoute.get('/', controller.menu)
//add menu
menuRoute.get('/add', controller.add)
menuRoute.post('/add', controller.save)
//edit menu
menuRoute.get('/edit/:menu_id', controller.edit)
menuRoute.post('/edit/:menu_id', controller.update)
//delete menu
menuRoute.get('/delete/:menu_id', controller.delete)
menuRoute.post('/delete/:menu_id', controller.delete)

module.exports = menuRoute;