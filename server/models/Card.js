const { Schema, model, Types } = require('mongoose');


const cardSchema = new Schema(
    {
        apiURL: {
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
