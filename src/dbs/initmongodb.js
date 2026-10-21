'use strict'

const mongoose = require('mongoose')
const { db: { host, port, name } } = require('../configs/config.mongdb')

const connectString = process.env.MONGODB_URI || `mongodb://${host}:${port}/${name}`

class Database {
  constructor() {
    this.connect()
  }

  // connect
  async connect(type = 'mongodb') {
    if (process.env.NODE_EVN !== 'product') {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    try {
      await mongoose.connect(connectString)
      console.log('✅ Kết nối MongoDB thành công')
    } catch (err) {
      console.log('❌ Kết nối MongoDB thất bại:', err.message)
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
