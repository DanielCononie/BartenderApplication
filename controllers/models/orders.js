const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
}, 
{ 
    collection: 'Orders'
});

const OrdersModel = mongoose.model('Orders', orderSchema);

module.exports = OrdersModel;