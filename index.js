require("dotenv").config()
const express = require("express")
const connectDB = require("./config/dbConfig")
const mongoose = require("mongoose")
// initialize express object
const app = express()

// for Json Data
app.use(express.json())
connectDB()
// Port
const PORT = process.env.PORT || 5890

// connect to server
mongoose.connection.once("open", () => {
    console.log("Database connection successful")
    
    app.listen(PORT, () => {
        console.log(`server is running on port http://localhost:${PORT}`)
    })
})
