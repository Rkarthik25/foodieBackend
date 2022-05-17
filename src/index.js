const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const connect = require("./configs/db");

const PORT = process.env.PORT;

const locationController = require("./contollers/Location.controller");

app.use("/", locationController);

// app.listen(PORT, async()=>{

//     try{
//         await connect();
//         console.log("DB is Connected..!")
//     }catch(err){
//         console.log("Err", err)
//     }
// })

const restaurantscontroller = require("./contollers/Restaurants.controller");

app.use("/", restaurantscontroller);

app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("DB is Connected..!")
    }catch(err){
        console.log("Err", err)
    }
})


