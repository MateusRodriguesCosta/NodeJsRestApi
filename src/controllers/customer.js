const customerdb = require('./mock.json')
const customer = require('../models/entities/customer')

class CustomerController {    

    constructor(database) {        
        this.entity = customer(database)
    }

    async list() {

        return this.entity.list(id)

    }

    async get(id) {
        
        return this.entity.get(id)

    }

    async add(customer) {

        return this.entity.add(customer)

    }

    async update() {

        return this.entity.update(id)

    }

    async delete() {

        return this.entity.delete(id)

    }

}

module.exports = (appserver) => new CustomerController(appserver.database)