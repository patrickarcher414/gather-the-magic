const { Schema, model, Types } = require('mongoose');

const cardSchema = new Schema(
    {
        imageUrl: {
            type: String,
            required: true,
        },
        cardId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        supertypes: {
            type: String,
            required: true,
        },
        legalities: {
            type: String,
            required: true,
        },
        comments: [
            {
                type: String,
                ref: "Comment"
            }
        ]
    }

);

const Card = model('Card', cardSchema);

module.exports = Card;
