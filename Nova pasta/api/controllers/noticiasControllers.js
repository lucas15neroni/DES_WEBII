module.exports = {
    menu
}

function index (req, res) {
    res.render('noticias/frm.noticiasMenu.ejs',
        {title: 'Noticias',
            autor:'2.° DSM - WEB II'})
}