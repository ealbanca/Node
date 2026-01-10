// express web server
const express = require('express');
const app = express();

const port =3000;

app.use('/', require('./routes/index'));

app.listen(process.env.PORT || port);
console.log('Server is running ' +'on port ' + (process.env.PORT || port));