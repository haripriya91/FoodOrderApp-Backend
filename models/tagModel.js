const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    tag_id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    count:{
        type: Number,
        required: true,
    }
});

const Tags = mongoose.model('Tags',tagSchema);
module.exports = Tags;