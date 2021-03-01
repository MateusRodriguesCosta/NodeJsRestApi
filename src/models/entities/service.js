class Service {

    constructor(database) {
        this.database = database
    }

    list() {

        const query = 'SELECT * FROM Services'

        return await this.database.run(query, "list")

    }

    get(id) {        

        const query = 'SELECT * FROM Services WHERE id = ?'

        return await this.database.run(query, id)
        

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