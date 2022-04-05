const controllerLazer= require('../controllers/lazerControllers.js')

app.get('/lazer/lazerMenu', controllerLazer.menu)

