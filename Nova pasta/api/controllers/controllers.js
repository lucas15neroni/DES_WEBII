const models = require('../models/models.js')
const fetch = require('node-fetch')
const axios = require('axios')
const cors = require('cors')


module.exports = {
    rotaRaiz,
    cursoGetById,
    cepGetById,
    livrosGetById,
    sabespGetById,
    githubGetById,
    chuckGetById



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

    const url = `http://viacep.com.br/ws/` + cep + `/json/`;
    console.log("Endereço: " + url)

    axios(url)
        .then((response) => console.log(response.data))
        .then(response => console.log (dados))
           
        
//        .then(response => console.log(dados))
        .catch(function (error) {
            console.log("Erro na requisição!");
        })
        .finally(function () {
            console.log("Final consulta de CEP!");
        });
}
function livrosGetById(req, res) {
    const livro = req.params.livroid;
    console.log("Parametro esperado: " + livro);
    res.json({ message: 'Rota livros encontrada!' })

    var leitura
    console.time(leitura)

    models.getByIdLivro(livro);

    console.timeEnd(leitura)
    console.log("== Livro =============================")

}
function sabespGetById(req, res) {
    const sabesp = req.params.dataid;
    console.log("Parametro esperado: " + sabesp);

    const url = `http://sabesp-api.herokuapp.com/` + sabesp;
    console.log(url)
    axios(url)
    .then((response) => console.log(response.data))
    .then(response => console.log (dados))
    // fetch(url)
    //     .then((response) => response.json())
    //     .then(data => {
    //         dados = data;
    //         res.json({ message: dados })
    //     })
//        .then(response => console.log(dados))
        .catch(function (error) {
            console.log("Erro na requisição!");
        })
        .finally(function () {
            console.log("Final consulta da Sabesp!")
        });
}
function githubGetById(req, res) {
    const git = req.params.perfilid;
    console.log("Parametro esperado: " + git);
    const url = `https://api.github.com/users` ;
    console.log(url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({ message: dados })
        })
        .then(response => console.log(dados))
        .catch(function (error) {
            console.log("Erro na requisição!");
        })
        .finally(function () {
            console.log("Erro na requisição!")
        });
}
function chuckGetById(req, res) {
    const chuck = req.params.chuckid;
    console.log("Parametro esperado: " + chuck);

    const url = `https://api.chucknorris.io/jokes/random`;
    console.log(url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({ message: dados })
        })
        .then(response => console.log(dados))
        .catch(function (error) {
            console.log("Erro na requisição!");
        })
        .finally(function () {
            console.log("Frase do Chuck Noris!")
        });
}