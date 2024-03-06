require("dotenv").config()
const express = require("express")

// initialize express object
const app = express()

// for Json Data
app.use(express.json())

// Port
const PORT = process.env.PORT || 5890

// connect to server
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})