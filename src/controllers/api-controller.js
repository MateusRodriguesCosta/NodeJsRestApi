const customerdb = require('./mock.json')
const customer = require('../models/entities/customer')

class CustomerController {

    constructor(dbconnection) {
        this.dbconnection = dbconnection
    }

    list() {        

    }

    get() {

        
    }

    add() {


    }

    update() {


    }

    delete() {


    }

}

module.exports = (appserver) => new CustomerController(appserver.dbconnection)