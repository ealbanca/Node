const express = require('express'); // express web server
const BodyParser = require('body-parser'); // parse JSON request body
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

// parse application/json
app.use(BodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
// routes
app.use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Connected to MongoDB and listening on port ' + port);
    }
});