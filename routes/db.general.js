const express  = require('express');
const router = express.Router();
const {fetchAllLocationsAndCompanies} = require('../controllers/db.general');

 router.get('/', fetchAllLocationsAndCompanies);




// router.post('/', addNewAdvert);



module.exports = router;