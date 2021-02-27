const scheduledb = require('./mock.json')
const schedule = require('../models/entities/schedule')

class ScheduleController {    

    constructor(dbconnection) {        
        this.entity = schedule(dbconnection)
    }

    async list() {

        return await this.entity.list(id)

    }

    async get(id) {
        
        return await this.entity.get(id)

    }

    async add(schedule) {

        return await this.entity.add(schedule)

    }

    async update() {

        return await this.entity.update(id)

    }

    async delete() {

        return await this.entity.delete(id)

    }

}

module.exports = (appserver) => new ScheduleController(appserver.dbconnection)