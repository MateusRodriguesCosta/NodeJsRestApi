const express = require('express')
const config = require('./config/default.json')
const webserver = express()
const app = require('./app')
const db = require('./infra/db')

webserver.listen(process.env.PORT || config.server.port , () => {
    
    console.log(`Server running on ${config.server.port}`)

    db.start()

    app.start(webserver, db.connection)
})