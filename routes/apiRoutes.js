
const adverts = require('./db.adverts');
const companies = require('./db.companies');
const addresses = require('./db.addresses');
const contacts = require('./db.contacts');
const occupations = require('./db.occupations');
const positions = require('./db.positions');
const position_contacts = require('./db.position_contacts');

const express  = require('express');
const router = express.Router();


router.use(express.static('public/api'));

router.use('/position_contacts', position_contacts)

router.use('/adverts', adverts);

router.use('/positions', positions);

 router.use('/companies', companies);

 router.use('/addresses', addresses);

router.use('/occupations', occupations);

// router.use('/positions', positions);

// router.use('/occupations', occupations)

router.use('/contacts', contacts);

// router.use('/contracts', contracts);

// router.use('/comments', comments);

// router.use('/questions', questions);

// router.use('/locationsandestablishments', general);

module.exports = router;