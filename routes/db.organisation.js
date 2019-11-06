const express  = require('express');
const router = express.Router();
const {addNewOrganisation,  fetchAllOrganisations} = require('../controllers/db.organisation');

 router.get('/', fetchAllOrganisations);




router.post('/', addNewOrganisation);



module.exports = router;