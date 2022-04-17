const express = require("express")
const Router = express.Router()
const Flat = require("../../Models/Flat.model/flat.model")



Router.post("", async (req, res) => {
    try {
      const user = await Flat.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  
Router.get("", async (req, res) => {
    try {
      const user = await Flat.find().populate({  path: 'resident',
      select: ['name','age' , "gender"] }).lean().exec();
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  



  module.exports = Router