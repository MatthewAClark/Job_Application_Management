const advert = require('./db.advert');

const express  = require('express');
const router = express.Router();


router.use(express.static('public/api'));


router.use('/application', advert);

module.exports = router;