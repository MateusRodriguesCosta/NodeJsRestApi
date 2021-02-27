const config = require('./config/default.json')
const consign = require('consign')
const bodyParser = require('body-parser')


class Application {  

    start(appserver, database) {

        appserver.database = database
        
        appserver.use(bodyParser.urlencoded({extended:true}))
        appserver.use(bodyParser.json())

        appserver.set('name', config.application.name)

        consign({verbose: false})
        .include('/src/routes')        
        .into(appserver)

        console.log(`Application ${config.application.name} started`)
                
    }

}

module.exports = new Application