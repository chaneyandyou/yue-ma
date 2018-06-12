const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/shundi'
const glob = require('glob')
const { resolve } = require('path')

mongoose.Promise = global.Promise

exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

exports.connect = () => {
  mongoose.connect(DB_URL)
  mongoose.connection.on('connected', () => {
    console.log('数据库连接成功')
  })
  mongoose.connection.on('disconnected', () => {
      throw new Error('数据库挂了，少年')
  })

  mongoose.connection.on('error', err => {
    throw new Error('数据库挂了，少年')
  })
}
