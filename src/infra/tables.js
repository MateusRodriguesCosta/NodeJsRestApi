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

        const query = 'CREATE TABLE IF NOT EXISTS Schedules (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(56) NOT NULL, type VARCHAR(56) NOT NULL, description VARCHAR(256), insert_date INT, maintenance_start_date INT, maintenance_end_date INT, active BOOLEAN, PRIMARY KEY (id))'

        return this.buildTable(query)          

    }

    createServices() {

        const query = 'CREATE TABLE IF NOT EXISTS Services (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(56) NOT NULL, type VARCHAR(56) NOT NULL, cost_fix DECIMAL, description VARCHAR(256), PRIMARY KEY (id))'

        return this.buildTable(query)  

    }

}

module.exports = new Tables