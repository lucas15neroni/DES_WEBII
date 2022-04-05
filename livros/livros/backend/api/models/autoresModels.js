const conexao = require('../../config/conexao.js')

module.exports = {
    getAllAutores,
    getByIdAutores
}

function getAllAutores (callback) {
    conexao.query('select * from autores', callback)
}

function getByIdAutores (id, callback) {
    conexao.query('select * from autores where aut_codigo = ' + id, callback)
}
