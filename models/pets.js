import { conexao } from '..infraestrutura/conexao'

import { uploadDeArquivo } from '../arquivos/uploadDeArquivo'

class Pet {
    adicionar(pet) {
        const query = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, (novoCaminho) => {
            const novoPet = {nome: pet.nome, imagem: novoCaminho }

            conexao.query(query, novoPet, () => {
    
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status().json(novoPet)
                }
            })
        })
        
    }
}

export default new Pet()