const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurants.model")

router.post("/restaurants", async(req, res)=>{

    const restaurants = await Restaurants.create(req.body);
    return res.status(201).send(restaurants);
})

router.get("/restaurants", async(req, res)=>{

    const restaurants = await Restaurants.find().lean().exec();
    return res.status(201).send(restaurants);
})

module.exports = router;