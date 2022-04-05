const models = require('../models/autoresModels.js')
module.exports = {
    autoresGetAll,
    autoresGetById 
}

function autoresGetAll (req, res) {
  console.log("Rota Livros Listar")
  models.getAllAutores(function(err, resposta){
      console.log('Retorno de autores {M O D E L S}', resposta)
      if(err){
          throw err
         }else {
             res.json(resposta)

      }
  })
  
    
}

function autoresGetById (req, res) {
    const id = req.params.codigo;
    console.log('Parametros recebidos: '+id)
    models.getByIdAutores(id, function(err, resposta){
        console.log('Retorno de autores {M O D E L S}', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
  
        }
    })
    
      
  }