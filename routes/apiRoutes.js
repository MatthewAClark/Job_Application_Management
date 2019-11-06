const advert = require('./db.advert');
const organisation = require('./db.organisation');

const express  = require('express');
const router = express.Router();


router.use(express.static('public/api'));


router.use('/application', advert);

router.use('/organisation', organisation)

module.exports = router;