const mongoose = require("mongoose")


const flat = new mongoose.Schema({
      type:{type:String , required:true , default:"owner"}, 
      flatNumber:{type:Number , required:true},
      Block:{type:String , required:true},
    //   appartmentId:{type:mongoose.Schema.Types.ObjectId, ref:"apartment" , required:true},
      resident:[{type:mongoose.Schema.Types.ObjectId, ref:"rasident" , required:true}]
}, {
    timestamps:true,
    versionKey:false
}
)

const Flat = mongoose.model("flat" , flat)

module.exports = Flat
