const scheduledb = require('./mock.json')
const schedule = require('../models/entities/schedule')

class ScheduleController {    

    constructor(database) {        
        this.entity = schedule(database)
    }

    async list() {

        return this.entity.list(id)

    }

    async get(id) {
        
        return this.entity.get(id)

    }

    async add(schedule) {

        return this.entity.add(schedule)

    }

    async update() {

        return this.entity.update(id)

    }

    async delete() {

        return this.entity.delete(id)

    }

}

module.exports = (appserver) => new ScheduleController(appserver.database)