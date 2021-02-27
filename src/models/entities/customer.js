class Customer {

    constructor(dbconnection) {
        this.dbconnection = dbconnection
    }

    list() {

    }

    get(id) {        

        

    }

    add(customer) {

        const query = 'INSERT INTO Customers SET ?'                        

        return new Promise((resolve, reject) => {

            this.dbconnection.query(query, customer, (error, results) => {

                if (error) reject(error)
            
                resolve(results)
    
            })              

        })        

    }    

    update() {


    }

    delete() {


    }

}

module.exports = (dbconnection) => new Customer(dbconnection) 