const scheduledb = require('./mock.json')
const schedule = require('../models/entities/schedule')

class ScheduleController {    

    constructor(dbconnection) {        
        this.entity = schedule(dbconnection)
    }

    list() {

    }

    get(id) {
        
        return this.entity.get(id)

    }

    add(schedule) {

        return this.entity.add(schedule)

    }

    update() {


    }

    delete() {


    }

}

module.exports = (appserver) => new ScheduleController(appserver.dbconnection)