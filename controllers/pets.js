const Pet = require('../models/pets')

module.exports = app => {

    app.post('/pet', (req,res) => {
        const pet = req.body

        Pet.adicionar(pet, res)
    })
    
}