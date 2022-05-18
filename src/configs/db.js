const mongoose = require("mongoose");
require("dotenv").config();
module.exports= ()=>{
    return mongoose.connect(process.env.MONGODB_URL)
}

//https://murmuring-stream-22963.herokuapp.com/
//https://murmuring-stream-22963.herokuapp.com/location