class Service {

    constructor(dbconnection) {
        this.dbconnection = dbconnection
    }

    list() {

    }

    get(id) {        

        return 'Goodboy'

    }

    add(service) {

        const query = 'INSERT INTO Services SET ?'        
        
        return new Promise((resolve, reject) => {

            this.dbconnection.query(query, service, (error, results) => {

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

module.exports = (dbconnection) => new Service(dbconnection) 