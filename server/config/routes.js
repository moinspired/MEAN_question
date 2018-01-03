const Users = require('../controllers/users');
const Answers = require('../controllers/answers');
const Questions = require('../controllers/questions');
const path = require('path')


module.exports = function(app){
    app.post('/users', Users.create);
    app.delete('/users', Users.logout);
    app.get('/session', Users.session);

    app.post('/questions', Questions.create)
    app.get('/questions/:id', Questions.show)
    app.get('/questions', Questions.index)

    app.post('/answers/:id', Answers.create)
    app.get('/answers/:id', Answers.show)
    app.put('/answers/:id', Answers.updateEasy)

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}