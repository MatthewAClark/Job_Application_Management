
const express  = require('express');

const router = express.Router();

const {fetchCompanyById, fetchAllCompanies, fetchCompanyList, addNewCompany} = require('../controllers/db.companies');

 router.get('/', fetchAllCompanies);

 router.get('/list', fetchCompanyList);

router.get('/:company_id', fetchCompanyById)

router.post('/', addNewCompany);



module.exports = router;