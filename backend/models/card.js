const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
