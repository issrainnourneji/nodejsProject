const mongo = require('mongoose')
const schema = mongo.Schema

const Student = new schema ({
    nom : String,
    mot:String,
    status : Boolean,
    Numtel : Number,
});

module.exports = mongo.model("student"  , Student)