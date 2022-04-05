module.exports = {
    menu
}

function menu (req, res) {
    res.render('noticias/frm_noticiasMenu.ejs',
        {title: 'Noticias', 
            autor: 'Lucas_2º DSM - Web II'
        })
}



