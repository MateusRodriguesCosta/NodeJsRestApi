const express = require('express')
const config = require('./config/default.json')
const webserver = express()
const app = require('./app')
const db = require('./infra/db')

const port = process.env.PORT || config.server.port

webserver.listen(port , () => {
    
    console.log(`Server running on ${port}`)

    db.start().then(() =>{

        app.start(webserver, db.connection)  

    })
        
})