const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'petshop.ckjdcvils0oq.sa-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'petshop'
})

module.exports = conexao