const PhotosRoutes= require('./routes/PhotosRoutes')
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const { route } = require('./routes/router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use(PhotosRoutes)

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
