const customer_controller = require('../controllers/api-controller')

module.exports = (appserver) => {  

    const customer = customer_controller(appserver)
       
    appserver.get('/api', (req, res) => {

        console.log(customer)
        
        res.json('ok')

    })
/*
    appserver.get('/api/:id', (req, res) => {
        
        res.send('GET access to API')

    })

    appserver.post('/api', (req, res) => {
        
        res.send('POST access to API')
        
    })

    appserver.patch('/api/:id', (req, res) => {
        
        res.send('PATCH access to API')
        
    })

    appserver.put('/api/:id', (req, res) => {
        
        res.send('PUT access to API')
        
    })

    appserver.delete('/api/:id', (req, res) => {
        
        res.send('DELETE access to API')
        
    })
*/
}