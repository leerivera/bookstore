const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();

// import routes
const userRoutes = require('./routes/user')

//app
const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})
.then(() => console.log("Connected!!!"))



//routes middleware

// app.get("/", (req, res) => {
//     res.send("hello from node");
// });

app.use("api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server ${port}`)
});