
const express  = require('express');

const router = express.Router();

const {updateContactById, fetchAllContactMethods, fetchContactById, fetchContactMethodsById, fetchContacts, addNewContact, fetchContactsByAddressId, addContactMethod, fetchLiveContacts} = require('../controllers/db.contacts');

 router.get('/', fetchContacts);

 router.get('/contact/:contact_id', fetchContactById);

 router.get('/methods/:contact_id', fetchContactMethodsById);

//  router.get('/companies/:company_id', fetchContactsByCompanyId);

 router.get('/addresses/:address_id', fetchContactsByAddressId);

router.get('/methods', fetchAllContactMethods)

router.get('/live', fetchLiveContacts)

//  router.put('/:advert_id', updateAdvertById)

router.post('/', addNewContact);

router.post('/:contact_id', addContactMethod);

router.put('/:contact_id', updateContactById);



module.exports = router;