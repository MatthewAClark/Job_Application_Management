
const express  = require('express');

const router = express.Router();

const {fetchProfessionList} = require('../controllers/db.professions');

//  router.get('/', fetchAllCompanies);

 router.get('/list', fetchProfessionList);

// router.get('/:company_id', fetchCompanyById)

// router.post('/', addNewCompany);



module.exports = router;