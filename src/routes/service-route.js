const controller = require('../controllers/service')

module.exports = (appserver) => {  

    const service_controller = controller(appserver)
       
    appserver.get('/services', (req, res) => {                

        res.json()

    })


    appserver.get('/services/:id', (req, res) => {
        
        res.send('GET access to API')

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