const mongoose = require('mongoose');
require('../db/conn')
const employeeData = new mongoose.Schema({
    Ename:{
        type:String,
        required:true,
    },
    Egender:{
        type:String,
        required:true
    },
    Enumber:{
        type:Number,
        required:true
      
    },
    Ework:{
        type:String,
        required:true
    },
    Ebatch:{
        type:Number,
        required:true
    },
   
   
})
const Emplyeemodel = mongoose.model('datas',employeeData);
module.exports = Emplyeemodel;