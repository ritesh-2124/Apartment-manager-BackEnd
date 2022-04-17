const express = require("express")
const Router = express.Router()
const ApartMent = require("../../Models/Appartmentmodel/appartment.model")



Router.post("", async (req, res) => {
    try {
      const user = await ApartMent.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  
Router.get("", async (req, res) => {
    try {
      const user = await ApartMent.find().populate({  path: 'flatId',
      select: ['type','flatNumber' , "Block"] })
  .lean().exec()
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  



  module.exports = Router