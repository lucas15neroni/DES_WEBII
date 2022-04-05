const express = require('express')
const rotas = require('./rotas.js')
const porta = process.env.PORT || 3001


const app = express( )

app.use('/', rotas)

app.listen(porta, () => {
    console.log("Rodando na porta" + porta)
})