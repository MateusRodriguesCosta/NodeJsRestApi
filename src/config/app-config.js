const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = (app, express) => {

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign().include('./src/controllers').into(app)  

    return app
    
}