//const { append } = require('express/lib/response')
const controllerIndex = require('../controllers/indexControllers.js')

app.get('/', controllerIndex.index)

