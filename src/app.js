const express = require('express')
const app = express()
require('./db/conn')
const port = process.env.PORT || 3000;
const Employeerouter = require('./router/router')
app.use(express.json())
app.use(Employeerouter)
app.listen(port, () => {
    console.log(`Connection setup at ${port}`)
})