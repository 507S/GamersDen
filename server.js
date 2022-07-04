require('dotenv').config({path: "./config.env"})
const express = require('express')

const app = express()

app.use(express.json()) // help us to get data from the body -- middleware

app.use('/api/auth', require("./routes/auth"))

const PORT = process.env.PORT ||5000;

app.listen(PORT,() => console.log(`server running on port ${PORT}`))