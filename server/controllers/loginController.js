const User = require("../models/User");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    const user = await User.findById(req.body.id);
    const isValid = await bcrypt.compare(req.body.password, user.passwordHash);

})

module.exports = router;