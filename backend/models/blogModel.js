const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    timestamp: { type: Date, default: Date.now },
    genre: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
})

module.exports = mongoose.model('Blog', blogSchema);