const express  = require('express');
const router = express.Router();
const {addNewContact,  fetchAllContacts} = require('../controllers/db.contacts');

router.get('/', fetchAllContacts);

router.post('/', addNewContact);



module.exports = router;