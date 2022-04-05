
//OBJETOS BASICOS

const express = require('express')
const consign = require('consign')
const path = require('path')
//const body = require('body')

//INSTANCIAR OBJETO EXPRESS
app = express();

app.set('url', 'http://localhost:')
app.set('porta', 3007)

app.use(express.json())

//diretorio estatico
app.set('views', path.join(__dirname, '../apei/views'))
app.set('views engine', 'ejs') 

//diretorio estatico publico
app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))
app.use(express.static('estilos'))
app.use(express.static('imagens'))

consign({cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app

