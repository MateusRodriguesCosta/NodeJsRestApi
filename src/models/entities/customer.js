class Customer {

    constructor(database) {
        this.database = database
    }

    async list() {

        const query = 'SELECT * FROM Customers'

        return await this.database.run(query, "list")

    }

    async get(id) { 
        
        const query = 'SELECT * FROM Customers WHERE id = ?'

        return await this.database.run(query, id)

    }

    async add(customer) {

        const query = 'INSERT INTO Customers SET ?' 
        
        return await this.database.run(query, customer)        

    }    

    update() {


    }

    delete() {


    }

}

module.exports = (database) => new Customer(database) 