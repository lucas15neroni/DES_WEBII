module.exports = {
    menu
}

function menu (req, res) {
    res.render('lazer/frm_lazerMenu.ejs',
        {title: 'Lazer', 
            autor: 'Lucas_2º DSM - Web II'
        })
}

