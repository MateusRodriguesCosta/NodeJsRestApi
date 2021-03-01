class Schedule {

    constructor(database) {
        this.database = database
    }

    list() {

        const query = 'SELECT * FROM Schedules'

        return await this.database.run(query, "list")

    }

    get(id) {        

        const query = 'SELECT * FROM Schedules WHERE id = ?'

        return await this.database.run(query, id)
        
    }

    add(schedule) {

        const query = 'INSERT INTO Schedules SET ?'        
        
        return this.database.run(query, schedule) 

    }    

    update() {


    }

    delete() {


    }

}

module.exports = (database) => new Schedule(database) 