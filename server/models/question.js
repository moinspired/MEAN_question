const mongoose = require('mongoose')
const PollSchema = new mongoose.Schema({
    question: {
        type: String,
        require: [true, 'Required field'],
        minlength: [10, 'Question must be at least 10 characters']
    },
    _answers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer'
        }
    ],
    description: {
        type: String
    }
}, { timestamps: true });

mongoose.model('Question', PollSchema);