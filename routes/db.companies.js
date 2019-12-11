const express  = require('express');
const router = express.Router();
const {addNewCompany,  fetchAllCompanies, fetchAllCompanyNames} = require('../controllers/db.companies');

 router.get('/', fetchAllCompanies);

router.get('/names', fetchAllCompanyNames)


router.post('/', addNewCompany);



module.exports = router;