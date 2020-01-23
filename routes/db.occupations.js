
const express  = require('express');

const router = express.Router();

const {fetchOccupationList, fetchOccupations} = require('../controllers/db.occupations');

 router.get('/', fetchOccupations);

 router.get('/list', fetchOccupationList);

// router.get('/:company_id', fetchCompanyById)

// router.post('/', addNewCompany);



module.exports = router;