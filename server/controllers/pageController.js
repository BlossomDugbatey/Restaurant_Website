exports.home = async(req,res) => {
    //rendering the home page
    await res.render('pages/home', {title : "home"})
}