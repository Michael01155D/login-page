const User = require("../models/User");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.put("/", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({username: req.body.username, passwordHash: hash});
    const savedUser = await newUser.save();
    res.json(savedUser);
})

module.exports = router;