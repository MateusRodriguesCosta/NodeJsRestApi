class Schedule {

    constructor(dbconnection) {
        this.dbconnection = dbconnection
    }

    list() {

    }

    get(id) {        

        return 'Goodboy'

    }

    add(schedule) {

        const query = 'INSERT INTO Schedules SET ?'        
        
        this.dbconnection.query(query, schedule, (error, results) => {

            if (error) throw new Error(error)   

        })

        return schedule

    }    

    update() {


    }

    delete() {


    }

}

module.exports = (dbconnection) => new Schedule(dbconnection) 