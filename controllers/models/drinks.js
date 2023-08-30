const mongoose = require('mongoose');


const drinksSchema = new mongoose.Schema({
    
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
    description: {
        type: String,
        required: true
    } 

}, 
{ 
    collection: 'Drinks'
});

const DrinksModel = mongoose.model('Drinks', drinksSchema);

module.exports = DrinksModel;