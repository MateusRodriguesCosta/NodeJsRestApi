const mysql = require('Mysql')
const config = require('../config/default.json')

module.exports = {

    start: () => {

        const connection = mysql.createConnection(config.database)

        connection.connect((error) => {

            if(error) {
            
                console.log(`Database not connected: ${error}`)
            
            } else {
            
                console.log(`Database ${config.database.database} connected`)
                    
            }
        
        })

        this.connection = connection

    }
        
} 