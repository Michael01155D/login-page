const token = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require('../models/User');
require('dotenv').config();

module.exports = (req, res, next) => {
    const SECRET = process.env.SECRET;
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ error: "User must be logged in to send this request"})
    }
    const authToken = authorization.replace("Bearer ", "");
    token.verify(authToken, SECRET, async (error, payload) => {
        if (error) {
            return res.status(401).send({ error: "Could not validate authorization token, please logout and log back in"});
            
        }
    })
}