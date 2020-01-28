
const express  = require('express');

const router = express.Router();

const {updateCompanyById, fetchCompanyById, fetchAllCompanies, fetchCompanyList, addNewCompany} = require('../controllers/db.companies');

 router.get('/', fetchAllCompanies);

 router.get('/list', fetchCompanyList);

router.get('/:company_id', fetchCompanyById)

router.post('/', addNewCompany);

router.put('/:company_id', updateCompanyById);



module.exports = router;