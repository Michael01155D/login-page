const token = require("jsonwebtoken");
require('dotenv').config();

//used as middleware for protected routes
const handleAuth = (req, res, next) => {
    const SECRET = process.env.SECRET;
    const auth = req.get('Authorization');

    if (!auth) {
        return res.status(401).send({ error: "User must be logged in to send this request"})
    }
    const authToken = auth.replace("Bearer ", "");
    try {
        const data = token.verify(JSON.parse(authToken), SECRET);
        req.isValid = true;
    } catch (error) {
        return res.status(401).send({error});
    }
    next();
}

module.exports = handleAuth;