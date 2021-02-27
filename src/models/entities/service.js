class Service {

    constructor(database) {
        this.database = database
    }

    list() {

    }

    get(id) {        

        

    }

    add(service) {

        const query = 'INSERT INTO Services SET ?'        
        
        return this.database.run(query, service) 

    }    

    update() {


    }

    delete() {


    }

}

module.exports = (database) => new Service(database) 