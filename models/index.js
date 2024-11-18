const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    price: {
        type : Number,
        required : [true, 'price must be added'],
    },
    featured: {
        type : Boolean,
        required : false,
    },
    rating: {
        type : Number,
        default: 4.9,
    },
    createdAt: {
        type : Date,
        default: Date.now(),
    },
    company: {
        type : String,
        enum: {
            values: ['Apple', 'Samsung', 'Sony'],
            message: 'Only Apple, Samsung, Sony are allowed',
        },
    },
});

module.exports = mongoose.model("Products",productSchema);