const controllers = require('../controllers/autoresController.js')

server.get('/autores', controllers.autoresGetAll)

server.get('/autores/:codigo', controllers.autoresGetById)