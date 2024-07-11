const User = require("../models/User");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const handleAuth = require('../middlewares/handleAuth');

router.post("/", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const password = req.body.password;
    if (!password || password.trim().length < 8) {
        return res.status(400).send({invalidPasswordError: "Password must be at least 8 characters"})
    }
    const hash = await bcrypt.hash(password, salt);
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

router.use("/:id", (req, res, next) => {
    handleAuth(req, res, next);
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