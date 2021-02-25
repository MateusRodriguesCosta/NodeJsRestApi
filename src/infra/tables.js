class Tables {

    start(connection) {

        this.connection = connection

        return new Promise(async (resolve, reject) => {

            await this.createCustomers()
            await this.createSchedules()
            await this.createServices()

            resolve()

        })

    }

    buildTable(query){

        return new Promise((resolve, reject) => {

            this.connection.query(query, (error, results, fields) => {

                if (error) throw new Error(error.sqlMessage)                
                resolve()

            })

        })
    }

    createCustomers() {

        const query = 'CREATE TABLE IF NOT EXISTS Customers (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(56) NOT NULL, email VARCHAR(256) NOT NULL, occupation VARCHAR(56), license SMALLINT, PRIMARY KEY (id))'

        return this.buildTable(query)        

    }

    createSchedules() {

        //const query = 'CREATE TABLE IF NOT EXISTS Customers I NOT EXISTS (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(56) NOT NULL, email VARCHAR(256) NOT NULL, occupation VARCHAR(56), PRIMARY KEY id)'        

        const query = 'SHOW TABLES'

        return this.buildTable(query)  
        

    }

    createServices() {

        //const query = 'CREATE TABLE IF NOT EXISTS Customers I NOT EXISTS (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(56) NOT NULL, email VARCHAR(256) NOT NULL, occupation VARCHAR(56), PRIMARY KEY id)'        

        const query = 'SHOW TABLES'

        return this.buildTable(query)  

    }

}

module.exports = new Tables