exports.home = async(req,res) => {
    //rendering the home page
    await res.render('pages/home', {title : "home"})
}

exports.ourStory = async (req,res) => {
    await res.render('pages/ourStory', {title: "ourStory"})
}