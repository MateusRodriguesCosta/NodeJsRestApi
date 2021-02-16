const { fs } = require("fs")
const { path } = require('path')

module.exports = (caminho, nomeDoArquivo) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)

    if (!tiposValidos.indexOf(tipo.substring(1)) === -1) {

        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    
        fs.createReadStream(caminho)
            pipe(fs.createWriteStreeam(novoCaminho))
            .on('finish', () => callbackImagemCriada(novoCaminho))

    }    

}