const controllerContato = require('../controllers/contatoControllers.js')

app.get('/contato/contatoMenu', controllerContato.menu)

