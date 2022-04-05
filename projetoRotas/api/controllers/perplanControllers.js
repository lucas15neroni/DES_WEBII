module.exports = {
    menu
}

function menu (req, res) {
    res.render('perplan/frm_perplanMenu.ejs',
        {title: 'Rotas', 
            mensagem: '',
            conteudo: '',
            autor: 'Lucas 2º DSM - Web II'
        })
}

