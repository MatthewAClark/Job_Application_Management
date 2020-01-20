
const express  = require('express');

const router = express.Router();

const {fetchAllCorrespondence} = require('../controllers/db.correspondence');

 router.get('/', fetchAllCorrespondence);

//  router.get('/live', fetchLiveAdverts);

//  router.get('/companies/live/:company_id', fetchLiveAddressesByCompanyId);

//  router.get('/:address_id', fetchAddressById)

// //  router.put('/:advert_id', updateAdvertById)

// router.post('/company/', addNewCompanyAddress);



module.exports = router;