require("dotenv").config()
const express = require("express")
const connectDB = require("./config/dbConfig")
const mongoose = require("mongoose")

// initialize express object
const app = express()

// for Json Data
app.use(express.json())

// for Database Connection
connectDB()


// Register routes
app.use("/api/register", require("./routers/auth/register"))
app.use("/api/login", require("./routers/auth/login"))
app.use("/api/user", require("./routers/user"))


// Port
const PORT = process.env.PORT || 5890

// connect to Database
mongoose.connection.once("open", () => {
    console.log("Database connection successful")

 // connect to server   
    app.listen(PORT, () => {
        console.log(`server is running on port http://localhost:${PORT}`)
    })
})


