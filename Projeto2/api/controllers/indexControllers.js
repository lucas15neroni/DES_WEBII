module.exports = {
    index
}

function index (req, res) {
    res.render('index.ejs',
        {title: 'Rotas', 
            mensagem: 'Iniciando com NodeJS e Express',
            conteudo: 'Corpo da Página - vh x vw',
            autor: 'Lucas_2º DSM - Web II'
        })
}

