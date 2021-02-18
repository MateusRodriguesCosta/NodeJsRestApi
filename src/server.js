const appinit = require('./app')
const serverconfig = require('./config/server-config')

const app = appinit()

app.listen(serverconfig.port , () => console.log(`Server running on ${serverconfig.port}`))