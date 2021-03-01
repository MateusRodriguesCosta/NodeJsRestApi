const controller = require('../controllers/service')

module.exports = (appserver) => {  

    const service_controller = controller(appserver)
       
    appserver.get('/services', (req, res) => {                

        try {            
         
            let result = await service_controller.list()

            res.send(result)

        } catch (error) {
                        
            res.status(400).send(error)

        }

    })


    appserver.get('/services/:id', (req, res) => {
        
        let id = parseInt(req.params.id)
                
        try {            
         
            let result = await service_controller.get(id)

            res.send(...result)

        } catch (error) {
                        
            res.status(400).send(error)

        }

    })

    appserver.post('/services', (req, res) => {
        
        let service = req.body

        service = service_controller.add(service)        

        res.send(service)
        
    })

    appserver.patch('/services/:id', (req, res) => {
        
        res.send('PATCH access to API')
        
    })

    appserver.put('/services/:id', (req, res) => {
        
        res.send('PUT access to API')
        
    })

    appserver.delete('/services/:id', (req, res) => {
        
        res.send('DELETE access to API')
        
    })

}