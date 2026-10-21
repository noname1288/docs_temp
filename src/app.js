const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//init db
/*
cách connnect DB cũ ưu/ nhược
cách mới
cách kiểm tra hệ thống có bn connect
cách phát hiện hệ thống quá tải
có nên disConnect() liên tục giống Oracle không? 
poolSize là gì?  nếu vượt qua ngưỡng poolsize? 

*/
require('./dbs/initmongodb')
// const { checkOverload } = require('./helper/check.connect')
// checkOverload()

// init routes
app.use('/', require('./routers'))

//init error handling 






module.exports = app