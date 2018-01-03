
const mongoose = require('mongoose')
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

class AnswersController {
    create(req, res) {
        Question.findById(req.params.id, function (err, question) {
            if (err) {
                console.log(err);
            } else {
                var newAnswer = new Answer({
                    answer: req.body.answer,
                    likes: 0,
                    user: req.session.user_id,
                    detail: req.body.detail,
                });
                newAnswer.save(function (err) {
                    if (err) {
                        res.json(err);
                    } else {
                        question._answers.push(newAnswer)
                        question.save(function (err) {
                            if (err) {
                                console.log(err)
                            } else {
                                res.json(newAnswer);
                            }
                        })

                    }
                })
            }
        })
    }
    
    show(req, res){
        Answer.findById(req.params.id).populate({ path: 'user', model: 'User'}).exec((err, answer) => {
            if(err){
                return res.json(err);
            }
            return res.json(answer);
        })
    }

    updateEasy(req, res){
        Answer.findById(req.params.id, (err, answer) => {
            if(err){
                return res.json(err);
            }
            answer.like++;
            answer.save((err, answer) => {
                if(err){
                    return res.json(err);
                }
                return res.json(answer);
            })
        })
    }
}

module.exports = new AnswersController();