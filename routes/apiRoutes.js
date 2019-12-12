
const adverts = require('./db.adverts');


const express  = require('express');
const router = express.Router();


router.use(express.static('public/api'));


router.use('/adverts', adverts);

// router.use('/companies', companies);

// router.use('/addresses', addresses);

// router.use('/positions', positions);

// router.use('/professions', professions)

// router.use('/contacts', contacts);

// router.use('/contracts', contracts);

// router.use('/comments', comments);

// router.use('/questions', questions);

// router.use('/locationsandestablishments', general);

module.exports = router;