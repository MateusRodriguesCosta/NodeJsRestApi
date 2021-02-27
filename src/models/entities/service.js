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
        
        this.dbconnection.query(query, service, (error, results) => {

            if (error) throw new Error(error)   

        })

        return service

    }    

    update() {


    }

    delete() {


    }

}

module.exports = (dbconnection) => new Service(dbconnection) 