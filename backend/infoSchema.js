const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("user", infoSchema);