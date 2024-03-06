const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    size: {type: String},
    color: {type: String},
    price: {
        type: Number,
        required: true
    },
    category: {type: Array}
    
}, {timestamps: true})

const productModel = mongoose.model("Product", productSchema)
module.exports = productModel