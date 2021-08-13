const mongoose = require('mongoose');
const Product = require('./Product');
const { Schema } = mongoose;

const cartSchema = new Schema({
    total: {
        type: Number,
        default: 0,
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]    
})


const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
