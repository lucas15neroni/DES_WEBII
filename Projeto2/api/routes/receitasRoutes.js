const controllerReceitas = require('../controllers/receitasControllers.js')

app.get('/receitas/receitasMenu', controllerReceitas.menu)

