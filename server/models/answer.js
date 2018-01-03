const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, 'Answer must be at least three characters.'],
        minlength: [3, 'Answer must be at least three characters.']
    },
    like: {
        type: Number,
        default: 0
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        rer: 'User'
    },
    detail: {
        type: String
    }
}, {timestamps: true})

mongoose.model('Answer', OptionSchema)