const express = require('express');
const PhotosController = require('../controllers/PhotosController');

const router = express.Router();

router.get('/photos', PhotosController.photosCollection);

module.exports = router;
