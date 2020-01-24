
const express  = require('express');

const router = express.Router();

const {fetchAllPositionContacts} = require('../controllers/db.position_contacts');

 router.get('/', fetchAllPositionContacts);

//  router.get('/live', fetchLiveAdverts);

//  router.get('/companies/live/:company_id', fetchLiveAddressesByCompanyId);

//  router.get('/:address_id', fetchAddressById)

// //  router.put('/:advert_id', updateAdvertById)

// router.post('/company/', addNewCompanyAddress);



module.exports = router;