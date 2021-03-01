const controller = require('../controllers/schedule')

module.exports = (appserver) => {  

    const schedule_controller = controller(appserver)
       
    appserver.get('/schedules', (req, res) => {                

        try {            
         
            let result = await schedule_controller.list()

            res.send(result)

        } catch (error) {
                        
            res.status(400).send(error)

        }

    })


    appserver.get('/schedules/:id', (req, res) => {
        
        let id = parseInt(req.params.id)
                
        try {            
         
            let result = await schedule_controller.get(id)

            res.send(...result)

        } catch (error) {
                        
            res.status(400).send(error)

        }

    })

    appserver.post('/schedules', (req, res) => {
        
        let schedule = req.body

        schedule = schedule_controller.add(schedule)        

        res.send(schedule)
        
    })

    appserver.patch('/schedules/:id', (req, res) => {
        
        res.send('PATCH access to API')
        
    })

    appserver.put('/schedules/:id', (req, res) => {
        
        res.send('PUT access to API')
        
    })

    appserver.delete('/schedules/:id', (req, res) => {
        
        res.send('DELETE access to API')
        
    })

}