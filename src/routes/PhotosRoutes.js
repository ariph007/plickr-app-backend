const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/photos', Controller.photosCollection);

module.exports = router;
