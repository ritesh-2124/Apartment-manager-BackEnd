const express = require("express")
const Router = express.Router()
const Rasident = require("../../Models/Rasidentmodel/Rasident.model")



Router.post("", async (req, res) => {
    try {
      const user = await Rasident.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  
Router.get("", async (req, res) => {
    try {
      const user = await Rasident.find().lean().exec();
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  



  module.exports = Router