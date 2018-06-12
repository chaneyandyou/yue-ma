const express = require('express')
const { connect, initSchemas } = require('./database/init.js')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

;(async () => {
  await connect()
  initSchemas()
  const userRouter = require('./user')
  const app = new express()
  app.use(cookieParser())
  app.use(bodyParser.json())

  app.use('/rest/user', userRouter)

  app.listen(9093, () => {
    console.log('9093端口服务启动了')
  })
})()
