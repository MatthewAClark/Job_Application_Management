
const express  = require('express');

const router = express.Router();

const {fetchContactValuesById, fetchContacts, fetchContactsByCompanyId, addNewContact, fetchContactsByAddressId, fetchContactsByCompanyAndAddressId, addContactValue} = require('../controllers/db.contacts');

 router.get('/', fetchContacts);

 router.get('/:contact_id', fetchContactValuesById);

//  router.get('/live', fetchLiveAdverts);

 router.get('/companies/:company_id', fetchContactsByCompanyId);

 router.get('/addresses/:address_id', fetchContactsByAddressId);

 router.get('/companies/:company_id/addresses/:address_id', fetchContactsByCompanyAndAddressId);

//  router.put('/:advert_id', updateAdvertById)

router.post('/', addNewContact);

router.post('/:contact_id', addContactValue);



module.exports = router;