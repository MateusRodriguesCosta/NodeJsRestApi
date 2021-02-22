const mysql = require('Mysql')
const config = require('../config/default.json')

module.exports = {

    start: () => {

        return new Promise((resolve, reject) => {
        
            const connection = mysql.createConnection(config.database)          

            connection.connect((error) => {

                if (error) { 

                    console.log(`Database not connected: ${error}`)
                    return reject()

                } else {

                    this.connection = connection
                    console.log(`Database ${config.database.database} connected`)
                    return resolve()

                } 
        
            })            

        })

    }
        
} 