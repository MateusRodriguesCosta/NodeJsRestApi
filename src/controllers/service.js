const servicedb = require('./mock.json')
const service = require('../models/entities/service')

class ServiceController {    

    constructor(database) {        
        this.entity = service(database)
    }

    async list() {

        return this.entity.list()

    }

    async get(id) {
        
        return this.entity.get(id)

    }

    async add(service) {

        return this.entity.add(service)

    }

    async update() {

        return this.entity.update(service)

    }

    async delete() {

        return this.entity.delete(service)

    }

}

module.exports = (appserver) => new ServiceController(appserver.database)