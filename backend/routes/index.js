// backend/routes/index.js
const express = require('express');
const router = express.Router();

//imort and connect the API router to the main router
const apiRouter = require('./api');
router.use('/api', apiRouter);


//test-route
router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;
