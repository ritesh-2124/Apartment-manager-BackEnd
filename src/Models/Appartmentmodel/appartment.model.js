const mongoose = require("mongoose")


const Appartment = new mongoose.Schema({
      appartmentName:{type:String , required:true},
      flatId :[{type:mongoose.Schema.Types.ObjectId,
        ref: "flat",
        required: true}]
}, {
    timestamps:true,
    versionKey:false
}
)

const ApartMent = mongoose.model("apartment" , Appartment)

module.exports = ApartMent
