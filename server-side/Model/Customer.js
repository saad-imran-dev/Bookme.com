const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    email : {
        type : String,
        required:true
    },
    fname :{
        type: String,
        required:true,
    
    },
    lname : {
        type:String,
        required:true
    },
    Password : {
        type:String,
        required:true
    } 

    
});

customer = mongoose.model("customerdata", customerSchema)
module.exports = customer