const express = require ('express')
const router  =express.Router();
 const student = require ('../modele/student')

 const studentController = require ('../controller/studentController');
const validate = require('../midell/validate');
router.get('/show', (req,res,next)=>{
 res.send("hello");
});

router.get('/add/:nom/:mot/:status/:Numtel' , studentController.get)
router.post('/new' ,validate, studentController.post)
router.put('/update/:id' , studentController.update)
router.delete('/delete/:id' , studentController.deletet)
router.get('/getall' , studentController.getall)
router.get('/getbyid/:id' , studentController.getbyid)
router.get('/chat',(req,res,next)=>{
    res.render("chat");
})

/*router.get('/add/:nom/:mot/:status/:Numtel', (req,res,next)=>{
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
   });

    router.post('/new', async function(req,res,next){
    try{
        console.log("resu : " +JSON.stringify(req.body));
        const Student = new student(req.body)
        await Student.save();
    res.send("added")
    }catch(err){
        console.log(err)
    }
   })


   router.put("/update/:id" , async (req,res,next)=>{
    try{

       await student.findByIdAndUpdate(req.params.id,req.body, {new:true})
        res.send('update')
    }catch(err){
        res.send(err)
    }
   })

   router.delete("/delete/:id" , async (req,res,next)=>{
    try{
        await student.findByIdAndRemove(req.params.id)
        res.send("delete")
    }catch(err){
        res.send(err)
    }
   })

   /*router.get('/all',async (req,res,next)=>{
    try{
       const data = await student.find()
        res.send(data)
    }catch(err){
        res.send(err)
    }
   })

   router.get('/find/:id',async (req,res,next)=>{
    try{
       const data = await student.findById(req.params.id)
        res.send(data)
    }catch(err){
        res.send(err)
    }
   })*/
 
module.exports=router;