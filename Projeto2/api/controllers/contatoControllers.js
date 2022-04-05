module.exports = {
    menu
}

function menu (req, res) {
    res.render('contato/frm_contatoMenu.ejs',
        {title: 'Contato', 
            autor: 'Lucas_2º DSM - Web II'
        })
}

