require('dotenv').config({path: "./config.env"})
const express = require('express')
const connectDB = require('./config/db')
const errorHandler= require('./middleware/error')

//connect db
connectDB();

const app = express()

app.use(express.json()) // helps us to get data from the body -- middleware

app.use('/api/auth', require("./routes/auth"));

//error handles  should be last piece of middleware
app.use(errorHandler);

const PORT = process.env.PORT ||5000;

const server = app.listen(PORT,() => console.log(`server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})