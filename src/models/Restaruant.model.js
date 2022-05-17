const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    id:{type: Number},
    resname:{type: String},
    location:{type:String},
    image:{type: String}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("restaurant", restaurantSchema);