const conexao = require('..infraestrutura/conexao')
const { restart } = require('nodemon')

class Pet {
    adicionar(pet) {
        const query = 'INSERT INTO Pets ?'

        conexao.query(query, pet, () => {

            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status().json(pet)
            }

        })
    }
}

module.exports = new Pet()