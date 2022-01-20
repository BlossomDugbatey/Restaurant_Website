//importing or requiring the essential dependencies
const express = require ('express')
const ObjectId = require('mongodb').ObjectId
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts');


const app = express()

//middleware for communication or connectivity
app.use(express.static('public'));
app.use(expressLayouts);
app.use(cors());
app.use(express.urlencoded({extended: true}));

//setting our values for rendering views
app.set("layout","./layouts/main")

//setting the engine we want to use (view engine)
app.set("view engine", "ejs")

//route for home(app/home)
const pageRoute = require("./server/routes/pageRoutes")
app.use('/', pageRoute)

//route for menu
const menuRoute = require("./server/routes/menuRoutes")
app.use('/menus', menuRoute)

//port 
const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
    console.log(`server connected to port: ${PORT}`)
})