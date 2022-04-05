module.exports = {
    index
}

function index (req, res) {
    res.render('index.ejs',
        {title: 'Projeto Rotas',
            mensagem: 'Inciciando com NodeJS e Express',
            conteudo:'Corpo da Pagina - vh x vw',
            autor:'2.° DSM - WEB II'})
}