const mongoose = require('mongoose')

const cartSchema = ({
    userid : {
        type : String,
        required : true
    },
    fooddetail : [{
        foodname : {
            type : String
        },
        foodquantity : {
            type : String
        },
        foodprice : {
            type : String
        }
    }],
    totalprice : {
        type : Number
    }
})

const Cart = mongoose.model('Cart',cartSchema)

module.exports = { Cart } 