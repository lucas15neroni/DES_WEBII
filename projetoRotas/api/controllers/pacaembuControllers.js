module.exports = {
    menu
}

function menu (req, res) {
    res.render('pacaembu/frm_pacaembuMenu.ejs',
        {title: 'Rotas', 
            mensagem: '',
            conteudo: '',
            autor: 'Lucas 2º DSM - Web II'
        })
}

