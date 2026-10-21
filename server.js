const mongoose = require('mongoose')
const app = require('./src/app')
const { app: { port: PORT } } = require('./src/configs/config.mongdb')

const server = app.listen(PORT, () => {
    console.log(`hello word with ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(async () => {
        await mongoose.disconnect()
        console.log('Exit')
        process.exit(0)
    })

    server.closeAllConnections?.()
})