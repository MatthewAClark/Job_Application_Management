
const express  = require('express');

const router = express.Router();

const {fetchAllCompanies, fetchCompanyList, addNewCompany} = require('../controllers/db.companies');

 router.get('/', fetchAllCompanies);

 router.get('/list', fetchCompanyList);

 

router.post('/', addNewCompany);



module.exports = router;