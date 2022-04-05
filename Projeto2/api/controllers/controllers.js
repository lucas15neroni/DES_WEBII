const models = require('../models/models.js')
const fetch = require('node-fetch')
const axios = require('axios')
const cors = require('cors')

module.exports = {
    rotaRaiz,
    cursoGetById,
    cepGetById,
    livrosGetById

}

function rotaRaiz(req, res) {
    console.log('Rota Raiz Encontrada!')
    res.json({ Ola: 'Rota Raiz Encontrada!' })
}

function cursoGetById(req, res) {
    const curso = req.params.cursoid
    console.log("Parametro esperado: " + curso)
    res.json({ Message: 'Rota Consultar Cursos Encontrada!' })

    let leitura
    console.time(leitura)

    models.getByIdCurso(curso)

    console.timeEnd(leitura)
    console.log("== Curso =============================")

}

function cepGetById(req, res) {
    const cep = req.params.cepid;
    console.log("Parametro esperado: " + cep);

    const url = `http://viacep.com.br/ws/`+ cep +`/json/`;
    console.log("Endereço: " + url)

    // fetch(url)
    axios.get(url)
        //.then((response) => response.json())
        //.then(data => {
        //    dados = data;
        //    res.json({ message:dados })
        //})
        .then(response => console.log(response.data))
        .catch(function (error) {
            console.log("Erro na requisição!");
        })
        .finally(function () {
            console.log("Final consulta CEP!")
        });

}


function livrosGetById(req, res) {
    const livro = req.params.livroid;
    console.log("Parametro esperado: " + livro);
    res.json({message: 'Rota livros encontrada!'})

    var leitura
    console.time(leitura)

    models.getByIdLivro(livro);

    console.timeEnd(leitura)
    console.log("== Livro ===================")

}