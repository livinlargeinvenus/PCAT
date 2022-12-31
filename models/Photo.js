const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
    image: String,
    date: { type: Date, default: Date.now },
});

// model
const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
