const express = require("express")
const session = require("express-session")
const morgan = require("morgan")
const bodyParser = require('body-parser')
const app = express()
const port  = 8000;

app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser.json())
app.use(session({
    secret: 'serveysarefun',
    resave: false,
    saveUninitialized: true
}))
app.use(morgan('tiny'))

require('./server/config/mongoose');
require('./server/config/routes')(app)

app.listen(port, ()=> console.log(`listening on port ${port}..`));