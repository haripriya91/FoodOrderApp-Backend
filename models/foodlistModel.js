const mongoose = require('mongoose');

const foodListSchema = mongoose.Schema({
    food_id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number, // Floating-point number
        required: true, 
    },
    favorite :{
        type: Boolean,
        required: true,
        default: false,

    },
    star:{
        type: Number,
        required: true,
    },
    tags:{
        type: [String], // Array of strings
        default: [],
    },
    imageUrl:{
        type: String,
        required: true,
    },
    cookingTime:{
        type: String,
        required: true,
        trim: true,
    },
    origins:{
        type: [String], // Array of strings
        default: [],
    },
    description:{
        type: String,
        required: true,
    }
});

const FoodList = mongoose.model('FoodList',foodListSchema);
module.exports = FoodList;