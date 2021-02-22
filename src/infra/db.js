const mysql = require('Mysql')
const dbconfig = require('../config/db-config')

module.exports = () => {

    const database = mysql.createConnection(dbconfig)

    const connection = database.connect((error) => {
        if(error) {
        
            console.log(error.message)
        
        } else {
        
            console.log(`Database ${dbconfig.database} running`)
                
        }
    
    })

    return connection
} 