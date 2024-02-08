const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment_title: { type: String },
    comment_body: { type: String },
    comment_time: { type:  Date, default: Date.now },
    comment_author: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Comment', commentSchema);