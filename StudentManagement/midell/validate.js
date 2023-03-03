const yup  = require('yup')
const validate = (async function(req,res,next){
    try{
    const schema =yup.object().shape({
        nom :  yup.string().required(),
        mot: yup.string().required(),
        Numtel : yup.number().required(),
    })
    
   await  schema.validate(req.body )
   next()
}catch(error){
    console.log(error)
}
})
module.exports=validate