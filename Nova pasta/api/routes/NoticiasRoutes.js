//const { append } = require('express/lib/response')
const controllerNoticias = require('../controllers/noticiasControllers.js')

app.get('/', controllerNoticias.menu)

