const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    picture: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
});

const Post = model('Post', postSchema);

module.exports = Post;