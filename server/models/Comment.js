const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema(
    {
        writtenBy: {
            type: Types.ObjectId,
            required: true,
            ref: "User"
        },
        commentBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
