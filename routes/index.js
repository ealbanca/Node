const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.annieRoute);
routes.get('/jacob', lesson1Controller.jacobRoute);

module.exports = routes;