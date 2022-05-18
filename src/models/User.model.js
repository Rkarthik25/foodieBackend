const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{type: String},
    lastname:{type:String},
    email:{type:String},    
    phone:{type:String},
    location:{type:String},    
    pincode:{type:String},
    password:{type: String}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("users", userSchema);