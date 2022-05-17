const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
    id:{type: Number},
    resname:{type: String},
    city:{type:String},
    location:{type:String},
    image:{type: String}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("restaurants", restaurantsSchema);