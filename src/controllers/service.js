const servicedb = require('./mock.json')
const service = require('../models/entities/service')

class ServiceController {    

    constructor(dbconnection) {        
        this.entity = service(dbconnection)
    }

    list() {

    }

    get(id) {
        
        return this.entity.get(id)

    }

    add(service) {

        return this.entity.add(service)

    }

    update() {


    }

    delete() {


    }

}

module.exports = (appserver) => new ServiceController(appserver.dbconnection)