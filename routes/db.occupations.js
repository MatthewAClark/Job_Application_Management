
const express  = require('express');

const router = express.Router();

const {updateOccupationById, addNewOccupation, fetchOccupationList, fetchOccupations} = require('../controllers/db.occupations');

 router.get('/', fetchOccupations);

 router.get('/list', fetchOccupationList);

// router.get('/:company_id', fetchCompanyById)

 router.post('/', addNewOccupation);

 router.put('/:occupation_id', updateOccupationById)



module.exports = router;