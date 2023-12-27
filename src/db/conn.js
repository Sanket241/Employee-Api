const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Employee')
.then(()=>{
    console.log("Connection is good")
}).catch((err)=>{
    console.log(err)
})