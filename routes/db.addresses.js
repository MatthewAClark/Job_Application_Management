const express  = require('express');
const router = express.Router();
const {addNewAddress,  fetchAllAddresses} = require('../controllers/db.addresses');

 router.get('/', fetchAllAddresses);




router.post('/', addNewAddress);



module.exports = router;