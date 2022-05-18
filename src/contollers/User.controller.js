const express = require("express");
const router = express.Router();
const Users = require("../models/User.model")

router.post("/users", async(req, res)=>{

    const users = await Users.create(req.body);
    return res.status(201).send(users);
})

router.get("/users", async(req, res)=>{

    const users = await Users.find().lean().exec();
    return res.status(201).send(restaurants);
})

module.exports = router;