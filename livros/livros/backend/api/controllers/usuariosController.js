const models = require('../models/usuariosModels.js')
module.exports = {
    usuariosGetAll,
    usuariosGetById 
}

function usuariosGetAll (req, res) {
  console.log("Rota Editoras Listar")
  models.getAllUsuarios(function(err, resposta){
      console.log('Retorno de Usuarios {M O D E L S}', resposta)
      if(err){
          throw err
         }else {
             res.json(resposta)

      }
  })
  
    
}

function usuariosGetById (req, res) {
    const id = req.params.codigo;
    console.log('Parametros recebidos: '+id)
    models.getByIdUsuarios(id, function(err, resposta){
        console.log('Retorno de usuarios {M O D E L S}', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
  
        }
    })
    
      
  }