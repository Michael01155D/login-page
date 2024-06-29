const User = require("../models/User");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');

//send username and pw as request data
router.post("/", async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    const isValid = !user ? 
    false 
    : 
    await bcrypt.compare(req.body.password, user.passwordHash);
    if (!isValid) {
        return res.status(401).json({
            error: "Invalid Username or Password"
        })
    }
    const authToken = token.sign(user.toJSON(), process.env.SECRET);
    res.status(200).send({authToken, user});

})

module.exports = router;