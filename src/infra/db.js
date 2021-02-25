const mysql = require('Mysql')
const config = require('../config/default.json')
const tables = require('./tables')

class Database {

    start() {

        return new Promise((resolve, reject) => {

            const connection = mysql.createConnection(config.database)

            connection.connect(error => {

                if (error) throw new Error(`Database not connected: ${error}`)

                this.connection = connection

                console.log(`Database ${config.database.database} connected on ${config.database.port}`)
                resolve(connection)

            })

        })

    }

    startTables() {

        if (this.connection === undefined) throw new Error('Error: Empty database connection')

        return tables.start(this.connection)

    }

}

module.exports = new Database