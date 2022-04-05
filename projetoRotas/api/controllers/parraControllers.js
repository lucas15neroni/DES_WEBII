module.exports = {
    menu
}

function menu (req, res) {
    res.render('parra/frm_parraMenu.ejs',
        {title: 'Rotas', 
            mensagem: '',
            conteudo: '',
            autor: 'Lucas 2º DSM - Web II'
        })
}

