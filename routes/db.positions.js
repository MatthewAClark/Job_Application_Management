
const express  = require('express');

const router = express.Router();

const {fetchAllPositions} = require('../controllers/db.positions');

 router.get('/', fetchAllPositions);

//  router.get('/live', fetchLiveAdverts);

//  router.get('/companies/live/:company_id', fetchLiveAddressesByCompanyId);

//  router.get('/:address_id', fetchAddressById)

// //  router.put('/:advert_id', updateAdvertById)

// router.post('/company/', addNewCompanyAddress);



module.exports = router;