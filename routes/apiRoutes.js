
const advert = require('./db.advert');

const companies = require('./db.companies');
const addresses = require('./db.addresses');
const positions = require('./db.positions');
const contacts = require('./db.contacts');
const contracts = require('./db.jobContracts');
const comments = require('./db.comments');
const questions = require('./db.questions');
const general = require('./db.general');

const express  = require('express');
const router = express.Router();


router.use(express.static('public/api'));


router.use('/adverts', advert);

router.use('/companies', companies);

router.use('/addresses', addresses);

router.use('/positions', positions);

router.use('/contacts', contacts);

router.use('/contracts', contracts);

router.use('/comments', comments);

router.use('/questions', questions);

// router.use('/locationsandestablishments', general);

module.exports = router;