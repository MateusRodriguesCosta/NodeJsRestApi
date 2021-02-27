class Customer {

    constructor(database) {
        this.database = database
    }

    list() {

    }

    get(id) {        

        

    }

    async add(customer) {

        const query = 'INSERT INTO Customers SET ?' 
        
        return this.database.run(query, customer)        

    }    

    update() {


    }

    delete() {


    }

}

module.exports = (database) => new Customer(database) 