const express  = require('express');
const router = express.Router();
const {addNewCompany,  fetchAllCompanies} = require('../controllers/db.company');

 router.get('/', fetchAllCompanies);




router.post('/', addNewCompany);



module.exports = router;