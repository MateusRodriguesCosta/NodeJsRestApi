const controller = require('../controllers/api-controller')

module.exports = (app) => {    
       
    app.get('/api', (req, res) => {

        console.log(controller())
        
        res.json(controller.listItems)

    })

    app.get('/api/:id', (req, res) => {
        
        res.send('GET access to API')

    })

    app.post('/api', (req, res) => {
        
        res.send('POST access to API')
        
    })

    app.patch('/api/:id', (req, res) => {
        
        res.send('PATCH access to API')
        
    })

    app.put('/api/:id', (req, res) => {
        
        res.send('PUT access to API')
        
    })

    app.delete('/api/:id', (req, res) => {
        
        res.send('DELETE access to API')
        
    })

}