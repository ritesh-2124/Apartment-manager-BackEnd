const express = require("express")
const env = require("dotenv")
const cors = require("cors")
const App = express()
App.use(cors())
env.config()
App.use(express.json())
const connect = require("./db")
const {ragister, login} = require("./Controllers/user")
 const UserController  = require("./Controllers/Apartment.controller/appartment.controller");
 const RasidentController = require("./Controllers/Rasident.controller/Rasident.controller")
 const FlatController = require("./Controllers/flatController/flat.controller")
 const UserWiew = require("./Controllers/user.controller")


 App.post('/signup' , ragister)
App.post('/login' , login)
App.use('/appartment' , UserController)
App.use('/rasident' , RasidentController)
App.use('/flat' , FlatController)
App.use("/user" , UserWiew)



const port =  process.env.PORT || 8081 
App.listen(port, async()=>{
    try {
     await connect()
    console.log("server in running " , `${process.env.PORT}`)   
    } catch (error) {
      console.log(error)  
    }
    
})