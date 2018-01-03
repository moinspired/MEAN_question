// {
//     questions: 'whatever',
//     answer: {
//         answer: 'whaterver', questions: '12312309usdfsdf0912123'
//     },
//     answer: {
//         answer: 'whaterver'
//     },
//     answer: {
//         answer: 'whaterver'
//     },
// }

const mongoose = require('mongoose');
const Quesion = mongoose.model('Question');
const User = mongoose.model('User');
const Answer = mongoose.model('Answer');

var Question = mongoose.model('Question');

class QuestionsController {
    index(req, res){
        Question.find({}).exec((err, questions) => {
            if(err){
                return res.json(err);
            }
            return res.json(questions)
        }) 
    }
    create(req, res) {
        Question.create({ question: req.body.question, user: req.session.user_id, description: req.body.description}, (err, question) => {
            if(err){
                return res.json(err);
            }
            return res.json(question);
           })
    }

    show (req, res){
        Question.findById(req.params.id).populate({ path: '_answers', model: 'Answer'}).exec((err, question) => {
            if(err){
                return res.json(err);
            }
            return res.json(question);
        })
    }
}


module.exports = new QuestionsController();