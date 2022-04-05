module.exports = {
    menu
}

function menu (req, res) {
    res.render('projeto/frm_projetoMenu.ejs',
        {title: 'Rotas', 
            mensagem: '',
            conteudo: '',
            autor: 'Lucas 2º DSM - Web II'
        })
}

