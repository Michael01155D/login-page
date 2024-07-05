const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const server = express();
const cors = require('cors');
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.BACKEND_PORT;
const userRouter = require('./controllers/userController');
const loginRouter = require('./controllers/loginController');
server.use(cors());
server.use(express.json());
server.use("/users", userRouter);
server.use("/login", loginRouter);

mongoose.connect(MONGO_URL).then(res => {
    console.log("connected to Mongo!");
})

server.listen(PORT, () => {
    console.log("server up on port", PORT);
})
