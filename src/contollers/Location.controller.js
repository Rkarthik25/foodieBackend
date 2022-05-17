const express = require("express");
const router = express.Router();
const Location = require("../models/Location.model")

router.post("/location", async(req, res)=>{

    const location = await Location.create(req.body);
    return res.status(201).send(location);
})

router.get("/location", async(req, res)=>{

    const location = await Location.find().lean().exec();
    return res.status(201).send(location);
})

module.exports = router;