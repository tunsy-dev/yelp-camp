const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        min:0,
        max:5,
        defualt: 0,
        validate: {
            // validator accepts a function definition which it uses for validation
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value."
        }
    },
    text: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Review', reviewSchema);