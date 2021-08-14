const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    text: {
        type: String,
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
