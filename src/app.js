const config = require('./config/default.json')
const consign = require('consign')
const bodyParser = require('body-parser')


module.exports = {  

    start: (appserver, dbconnection) => {

        this.dbconnection = dbconnection

        appserver.use(bodyParser.urlencoded({extended:true}))
        appserver.use(bodyParser.json())

        appserver.set('name', config.application.name)

        consign({verbose: false})
        .include('./controllers')
        .then('./models')
        .then('./routes')
        .into(appserver)

        console.log(`Application ${config.application.name} started`)
        
    }

}

