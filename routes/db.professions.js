
const express  = require('express');

const router = express.Router();

const {fetchProfessionList, fetchProfessions} = require('../controllers/db.professions');

 router.get('/', fetchProfessions);

 router.get('/list', fetchProfessionList);

// router.get('/:company_id', fetchCompanyById)

// router.post('/', addNewCompany);



module.exports = router;