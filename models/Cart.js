const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new Schema({
     userId: String,
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }  
        }
    ],
    
}, {timestamps: true})



const CartModel = mongoose.model("Cart", cartSchema)
module.exports = CartModel
