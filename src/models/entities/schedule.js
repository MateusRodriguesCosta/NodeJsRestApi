class Schedule {

    constructor(database) {
        this.database = database
    }

    list() {

    }

    get(id) {        

        

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