const express = require("express");
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const morgan = require('morgan');

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Router
const infoRouter = require('./router');
app.use('/info', infoRouter);

// Listen port
app.listen(port, () => {
    console.log("Server started on " + port);
});

// DB Connection goes here..
mongoose.connect('mongodb://localhost/mern', ({ useNewUrlParser: true, useUnifiedTopology: true }), err => {
    if (!err) {
        console.log('Db connected successfully!');
    }
});