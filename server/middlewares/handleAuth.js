const token = require("jsonwebtoken");
require('dotenv').config();

//to use when user action requires logged in
const handleAuth = (req, res, next) => {
    const SECRET = process.env.SECRET;
    const { authorization } = req.headers;
    console.log("middleware reached. request is: ", req);
    if (!authorization) {
        return res.status(401).send({ error: "User must be logged in to send this request"})
    }
    const authToken = authorization.replace("Bearer ", "");
    token.verify(authToken, SECRET, async (error, payload) => {
        if (error) {
            return res.status(401).send({ error: "Could not validate authorization token, please logout and log back in"});
        }
    })
    next();
}

module.exports = handleAuth;