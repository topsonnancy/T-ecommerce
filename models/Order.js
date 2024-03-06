const mongoose = require("mongoose")
const Schema = mongoose.Schema
 
const orderSchema = new Schema({
    userId: String,
    products: [
        {
            productId: {
                type: string
            },
            quantity: {
                type: Number,
                default: 1
            }  
        }
    ],
    amount: { type: Number, required: true},
    address: Object,
    status: { type: String, default: "pending"}
    
}, {timestamps: true})



const orderModel = mongoose.model("Order", orderSchema)
module.exports = orderModel
