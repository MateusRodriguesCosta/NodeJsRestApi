const controller = require('../controllers/customer')

module.exports = (appserver) => {  

    const customer_controller = controller(appserver)
       
    appserver.get('/customers', async (req, res) => {                

        try {            
         
            let result = await customer_controller.list()

            res.send(result)

        } catch (error) {
                        
            res.status(400).send(error)

        }

    })


    appserver.get('/customers/:id', async (req, res) => {
        
        let id = parseInt(req.params.id)
                
        try {            
         
            let result = await customer_controller.get(id)

            res.send(...result)

        } catch (error) {
                        
            res.status(400).send(error)

        }

    })

    appserver.post('/customers', async (req, res) => {
        
        let customer = req.body
                
        try {
         
            let result = await customer_controller.add(customer)

            res.send(result)

        } catch (error) {
            
            res.status(400).send(error)

        }                
        
    })

    appserver.patch('/customers/:id', async (req, res) => {
        
        res.send('PATCH access to API')
        
    })

    appserver.put('/customers/:id', async (req, res) => {
        
        res.send('PUT access to API')
        
    })

    appserver.delete('/customers/:id', async (req, res) => {
        
        res.send('DELETE access to API')
        
    })

}