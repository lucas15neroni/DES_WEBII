module.exports = {
    menu
}

function menu (req, res) {
    res.render('mrv/frm_mrvMenu.ejs',
        {title: 'Rotas', 
            mensagem: '',
            conteudo: '',
            autor: 'Lucas 2º DSM - Web II'
        })
}

