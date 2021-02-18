const serverconfig = require('./config/server-config')
const dbconn = require('./infra/db-connection')
const appinit = require('./app')

const db = dbconn()

const app = appinit()

app.listen(serverconfig.port , () => console.log(`Application running on ${serverconfig.port}`))