const customerdb = require('./mock.json')
const customer = require('../models/entities/customer')

class CustomerController {    

    constructor(dbconnection) {        
        this.entity = customer(dbconnection)
    }

    list() {

    }

    get(id) {
        
        return this.entity.get(id)

    }

    add(customer) {

        return this.entity.add(customer)

    }

    update() {


    }

    delete() {


    }

}

module.exports = (appserver) => new CustomerController(appserver.dbconnection)