const student = require('../modele/student')
const express = require('express')

function get (req,res,next){
    console.log("notre data : " +JSON.stringify(req.params))
    new student({

        nom : req.params.nom,
        mot:req.params.mot,
        status :req.params.status,
        Numtel : req.params.Numtel
    }).save((err,data)=> {
        if (err) {
            console.log(err)
        }
        console.log(data)
        res.json(data)
    })
   }

   async function post (req,res,next){
    try{
        console.log("resu : " +JSON.stringify(req.body));
        const Student = new student(req.body)
        await Student.save();
    res.send("added")
    }catch(err){
        console.log(err)
    }
   }

   async function update(req,res,next){
    try{

       await student.findByIdAndUpdate(req.params.id,req.body, {new:true})
        res.send('update')
    }catch(err){
        res.send(err)
    }
   }

   async function deletet(req,res,next){
    try{
        await student.findByIdAndRemove(req.params.id)
        res.send("delete")
    }catch(err){
        res.send(err)
    }
   }

    async function getbyid(req,res,next){
        try{
           const data = await student.findById(req.params.id)
            res.send(data)
        }catch(err){
            res.send(err)
        }
       }


   async function getall(req,res,next){
    try{
       const data = await student.find()
        res.send(data)
    }catch(err){
        res.send(err)
    }
   }

   module.exports={get, post,update,deletet,getall, getbyid}