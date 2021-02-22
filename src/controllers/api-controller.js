module.exports = () => {

    const customerdb = require('./mock.json')

    const controller = {

        listItems: () => {

            return customerdb

        }        
        
    }

    return controller   

}