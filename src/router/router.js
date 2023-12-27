const express = require('express')
const router = new express.Router
const Employeemodel = require('../models/employee')
router.post('/employee',async(req,resp)=>{
    try{
        const result =  new Employeemodel(req.body);
        const data = await result.save()
        console.log(data)
        resp.status(200).send(data)
    }
    catch(err){
        resp.status(500).send(err)
    }
})
router.delete('/employee/:id',async(req,resp)=>{
    try{
        const id = req.params.id
        const data = await Employeemodel.findByIdAndDelete(id)
        console.log(data)
        resp.status(200).send(data)
    }
    catch(err){
        resp.status(500).send(err)
    }
})
router.get('/employee/:id',async(req,resp)=>{
    try{
        const check = req.params.id
        const data = await Employeemodel.findById(check)
            console.log(data);
        
        resp.status(200).send(data)
    }
    catch(err){
        resp.status(404).send(err)
    }
})
router.get('/employee',async(req,resp)=>{
    try{
        const data = await Employeemodel.find()
            console.log(data);
        resp.status(200).send(data)
    }
    catch(err){
        resp.status(404).send(err)
    }
})
router.patch('/employee/:id',async(req,resp)=>{
    try{
        const result = req.params.id
        const data = await Employeemodel.findByIdAndUpdate(result,req.body,{
            new:true
        })
        console.log(data)
        resp.status(200).send(data)
    }
    catch(err){
        resp.status(404).send(err)
    }
})
module.exports = router