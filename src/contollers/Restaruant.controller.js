const express = require("express");
const router = express.Router();
const Restaruant = require("../models/Restaruant.model")

router.post("/restaruant", async(req, res)=>{

    const restaruant = await Restaruant.create(req.body);
    return res.status(201).send(restaruant);
})

router.get("/restaruant", async(req, res)=>{

    const restaruant = await Restaruant.find().lean().exec();
    return res.status(201).send(restaruant);
})

module.exports = router;