const express  = require('express');
const router = express.Router();
const {addNewContact,  fetchAllContacts, fetchContactsByAddressId} = require('../controllers/db.contacts');

router.get('/', fetchAllContacts);

router.post('/', addNewContact);

router.get('/:address_id', fetchContactsByAddressId)


module.exports = router;