'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000

const countConnect = () => {
    const numcConnection = mongoose.connections.length
    console.log(`Number of connection::${numcConnection}`)
}

const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memUsage = process.memoryUsage().rss

        const maxConnections = numCores * 5
        
        console.log(`active connections:${numConnection}`)
        console.log(`memory usage: ${memUsage/1024/1024} MB`)

        if (numConnection > maxConnections){
            console.log('Connection overload detected')
        }

    }, _SECONDS)
}

module.exports = {
    countConnect,
    checkOverload
}