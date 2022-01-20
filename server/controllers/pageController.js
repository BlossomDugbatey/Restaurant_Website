require('../models/mongooseConnection')

exports.home = async(req,res) => {
    //rendering the home page
    await res.render('pages/home', {title : "Home"})
}

exports.ourStory = async (req,res) => {
    await res.render('pages/ourStory', {title: "Our Story"})
}