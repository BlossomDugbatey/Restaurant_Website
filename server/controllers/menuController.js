require('../models/mongooseConnection')
const Menu = require('../models/Menu')

//display menus
exports.menu = async (req,res) => {
    const menus = await Menu.find({})
    res.render('menus/index', {title: "Menu", menus})
}
//add a Menu
exports.add =async(req,res) => {
    await res.render('menus/add', {title: "Menu"})
}
//post the menu to the database
exports.save = async(req,res) => {
        //storing the new menu document
        const menu = await new Menu({
            //collecting the data from the user
            name: req.body.name,
            price: req.body.price,
            status: req.body.status,
            remarks: req.body.remarks
        })
        menu.save()
        // console.log(menu)
        res.redirect(302,'/menus')
}

//editing a menu
//first grab the menu based on the id
exports.edit = async(req,res) => {
    const menu = await Menu.findById(req.params.menu_id)
    res.render('menus/edit', {title: "Edit Menu", menu})
}

//update the edited menu
exports.update =async(req,res) => {
    const id = req.params.menu_id
    const menu = await Menu.updateOne({_id: id}, {name:req.body.name, 
        price:req.body.price, 
        status:req.body.status, 
        remarks:req.body.remarks})
    res.redirect(302,'/menus')
}

//delete a menu
exports.delete = async(req,res) => {
    res.render('menus/deleteQuestion', {title: "edit"})
}

exports.delete = async(req,res) => {
    const id = req.params.menu_id
    const menu = await Menu.deleteOne({_id:id})
    // console.log(id)
    res.redirect(302,'/menus')
}