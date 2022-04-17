const mongoose = require("mongoose")



const Rasidentel = new mongoose.Schema({
    name : {type:String , required: true},
    age :{type:Number , required: true },
    gender :{type:String , required: true}
}, {
    timestamps:true,
    versionKey:false
})

const Rasident = mongoose.model("rasident" , Rasidentel)

module.exports = Rasident
