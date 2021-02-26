class Customer {

    constructor(appserver) {
        this.connection = appserver.connection
    }

    add(customer) {
        const query = 'INSERT INTO Customers SET ?'

        this.connection.query(query, customer, (error) => {

            if (error) throw new Error(error)

            return customer

        })
    }

    sayhello() {

        console.log('Hey')
    }

}

module.exports = (appserver) => new Customer(appserver) 