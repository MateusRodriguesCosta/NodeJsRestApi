const controller = require('../controllers/customer')

module.exports = (appserver) => {  

    const customer_controller = controller(appserver)
       
    appserver.get('/customers', (req, res) => {                

        res.json()

    })


    appserver.get('/customers/:id', (req, res) => {
        
        res.send('GET access to API')

    })

    appserver.post('/customers', async (req, res) => {
        
        let customer = req.body
                
        try {
         
            let customer_result = await customer_controller.add(customer)     

            res.send(customer_result)

        } catch (error) {
            
            res.status(400).send(error)

        }                
        
    })

    appserver.patch('/customers/:id', (req, res) => {
        
        res.send('PATCH access to API')
        
    })

    appserver.put('/customers/:id', (req, res) => {
        
        res.send('PUT access to API')
        
    })

    appserver.delete('/customers/:id', (req, res) => {
        
        res.send('DELETE access to API')
        
    })

}