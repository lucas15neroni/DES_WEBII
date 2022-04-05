module.exports = {
    menu
}

function menu (req, res) {
    res.render('eletronicos/frm_eletronicosMenu.ejs',
        {title: 'Eletronicos', 
            autor: 'Lucas_2º DSM - Web II'
        })
}

