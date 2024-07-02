const User = require("../models/User");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


router.post("/", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({username: req.body.username, passwordHash: hash});
    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch(e) {
        res.json(e)
    }
})

router.get("/", async (req, res) => {
    const users = await User.find({});
    res.json(users)
})

router.get("/:id", async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user)
    } catch(e) {
        res.json(e);
    }
})

router.delete("/:id", async(req, res) => {
    await User.findByIdAndDelete(req.params.id);    
})
module.exports = router;