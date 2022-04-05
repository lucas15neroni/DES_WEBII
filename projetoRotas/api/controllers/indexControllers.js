module.exports = {
    index
}

function index (req, res) {
    res.render('index.ejs',
        {title: 'Rotas', 
            mensagem: '',
            conteudo: '',
            autor: 'Lucas 2º DSM - Web II'
        })
}

