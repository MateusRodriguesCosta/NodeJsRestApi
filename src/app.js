const express = require('express')
const appconfig = require('./config/app-config')

module.exports = () => {  

    const app = express()

    return appconfig(app, express)

}

