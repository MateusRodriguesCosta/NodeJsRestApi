class Customer {

    constructor(dbconnection) {
        this.dbconnection = dbconnection
    }

    list() {

    }

    get(id) {        

        return 'Goodboy'

    }

    add(customer) {

        const query = 'INSERT INTO Customers SET ?'        
        
        this.dbconnection.query(query, customer, (error, results) => {

            if (error) throw new Error(error)   

        })

        return customer

    }    

    update() {


    }

    delete() {


    }

}

module.exports = (dbconnection) => new Customer(dbconnection) 