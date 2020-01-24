
const express  = require('express');

const router = express.Router();

const {fetchAllContactMethods, fetchContactMethodsById, fetchContacts, addNewContact, fetchContactsByAddressId, addContactMethod} = require('../controllers/db.contacts');

 router.get('/', fetchContacts);

//  router.get('/contact/:contact_id', fetchContactById);

 router.get('/methods/:contact_id', fetchContactMethodsById);

//  router.get('/companies/:company_id', fetchContactsByCompanyId);

 router.get('/addresses/:address_id', fetchContactsByAddressId);

router.get('/methods', fetchAllContactMethods)

//  router.put('/:advert_id', updateAdvertById)

router.post('/', addNewContact);

router.post('/:contact_id', addContactMethod);



module.exports = router;