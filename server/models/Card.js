const { Schema, model, Types } = require('mongoose');

const cardSchema = new Schema(
    {
        imageUrl: {
            type: String,
            required: true,
        },
        mtgCardId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: [String],
        supertypes: [String],
        comments: [
            {
                type: Types.ObjectId,
                ref: "Comment"
            }
        ]
    }

);

const Card = model('Card', cardSchema);

module.exports = Card;
