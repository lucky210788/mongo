const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
});
app.use(bodyParser.json());
app.use('/', users);

(async () => {
    try {
       await mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('successful connected!');
        app.listen(8080, function () {
            console.log('server is listening on 8080 port!')
        });

    } catch (error) {
        console.log(error)
    }
})();

