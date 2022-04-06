const conexao = require('../../config/conexao.js')

module.exports = {
    getAllUsuarios,
    getByIdUsuarios
}

function getAllUsuarios (callback) {
    conexao.query('select * from usuarios', callback)
}

function getByIdUsuarios(id, callback) {
    conexao.query('select * from usuarios where usu_password = ' + id, callback)
}
