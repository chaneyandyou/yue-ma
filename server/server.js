const express = require('express')
const userRouter = require('./user')

const app = express()
app.use('/rest/user', userRouter)

app.listen(9093, () => {
    console.log('9093端口服务启动了')
})
