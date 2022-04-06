const controllers = require('../controllers/usuariosController.js')

server.get('/usuarios', controllers.usuariosGetAll)

server.get('/usuarios/:codigo', controllers.usuariosGetById)