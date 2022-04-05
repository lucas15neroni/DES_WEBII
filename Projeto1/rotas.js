const express = require('express')
const rotas = express.Router()

//aray chave x valor

const cursosInfo = [
    {'curso':'Css', 'Info': 'Curso Introdutorio de Css'},
    {'curso':'Javascript', 'Info': 'Curso Basico de Javascript'},
    {'curso':'NodeJs', 'Info': 'Curso de NodeJs'},
    {'curso':'Excel', 'Info': 'Curso Basico de Excel'},
    {'curso':'React', 'Info': 'Curso de React Avançado e Prático'}
]
rotas.get('/', (req, res) => {
    res.json({Olá: 'Seja bem vindo!'})
})

rotas.get('/:cursosid', (req, res)=> {
    const curso = req.params.cursosid
    const cursoI = cursosInfo.find(i => i.curso == curso)
    if(!cursoI){
        res.status(404).json(
            {erro: 'Curso não encontrado!' , cursoPesquisado:curso}
        )
    } else {
            res.status(200).json(cursoI)
        }
})

        
    
module.exports = rotas
