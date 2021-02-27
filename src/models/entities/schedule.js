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
        
        return new Promise((resolve, reject) => {

            this.dbconnection.query(query, schedule, (error, results) => {

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

module.exports = (dbconnection) => new Schedule(dbconnection) 