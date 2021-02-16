const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'database-1.ckjdcvils0oq.sa-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: '12345678',
    database: 'agenda-petshop'
})

module.exports = conexao