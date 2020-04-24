const express = require('express');

const routes = express.Router();

const HashtagController = require('./controllers/HashtagController');

routes.get('/:hashtag', HashtagController.getPublications);

module.exports = routes;