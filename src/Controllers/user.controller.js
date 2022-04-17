const express = require("express")
const Router = express.Router()
const User = require("../Models/user.model")


  
Router.get("", async (req, res) => {
    try {
      const user = await User.find().populate({  path: 'apartmentId',
      select: ["appartmentName"],populate:{path:"flatId" , select:["type" , "flatNumber" , "Block" ,"resident"],populate:{  path: 'resident',
      select: ['name','age' , "gender"] }}})
  .lean().exec()
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  

  module.exports =Router