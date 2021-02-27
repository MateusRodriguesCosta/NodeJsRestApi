const customerdb = require('./mock.json')
const customer = require('../models/entities/customer')

class CustomerController {    

    constructor(dbconnection) {        
        this.entity = customer(dbconnection)
    }

    async list() {

        return await this.entity.list(id)

    }

    async get(id) {
        
        return await this.entity.get(id)

    }

    async add(customer) {

        return await this.entity.add(customer)

    }

    async update() {

        return await this.entity.update(id)

    }

    async delete() {

        return await this.entity.delete(id)

    }

}

module.exports = (appserver) => new CustomerController(appserver.dbconnection)