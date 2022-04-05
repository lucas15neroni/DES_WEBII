const controllerEletronicos = require('../controllers/eletronicosControllers.js')

app.get('/eletronicos/eletronicosMenu', controllerEletronicos.menu)

