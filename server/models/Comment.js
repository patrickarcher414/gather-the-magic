const { Schema, model, Types } = require('mongoose');


const commentSchema = new Schema(
    {
        writtenBy: {
            type: String,
            required: true
        },
        commentBody: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

commentSchema.virtual('replyCount').get(function () {
    return this.replies.length;
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
