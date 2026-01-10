// express web server
const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.jacobRoute);

const port =3000;

app.listen(process.env.PORT || port);
console.log('Server is running ' +'on port ' + (process.env.PORT || port));