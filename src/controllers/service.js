const servicedb = require('./mock.json')
const service = require('../models/entities/service')

class ServiceController {    

    constructor(dbconnection) {        
        this.entity = service(dbconnection)
    }

    async list() {

        return await this.entity.list(id)

    }

    async get(id) {
        
        return await this.entity.get(id)

    }

    async add(service) {

        return await this.entity.add(service)

    }

    async update() {

        return await this.entity.update(service)

    }

    async delete() {

        return await this.entity.delete(service)

    }

}

module.exports = (appserver) => new ServiceController(appserver.dbconnection)