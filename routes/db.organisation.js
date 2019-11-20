const express  = require('express');
const router = express.Router();
const {addNewOrganisation,  fetchAllOrganisations, fetchAllNamesAndIds} = require('../controllers/db.organisation');

 router.get('/', fetchAllOrganisations);

router.get('/names', fetchAllNamesAndIds);


router.post('/', addNewOrganisation);



module.exports = router;