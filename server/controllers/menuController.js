exports.menu = async (req,res) => {
    await res.render('menus/home', {title: "home"})
}