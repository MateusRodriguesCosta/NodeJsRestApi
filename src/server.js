const express = require('express')
const config = require('./config/default.json')
const webserver = express()
const app = require('./app')
const db = require('./infra/db')

const port = process.env.PORT || config.server.port

webserver.listen(port, async () => {

    console.log(`Server running on ${port}`)

    try {

        await db.start()

        await db.startTables()

        app.start(webserver, db.connection)

    } catch (error) {

        console.log(`Something went wrong with server!`)

    }

})