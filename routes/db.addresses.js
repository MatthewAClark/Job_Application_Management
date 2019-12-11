const express  = require('express');
const router = express.Router();
const {addNewAddress,  fetchAllAddresses, fetchByEstablishmentId} = require('../controllers/db.addresses');

//  router.get('/', fetchAllAddresses);

router.get('/', fetchAllAddresses)

router.get('/:establishment_id', fetchByEstablishmentId)


router.post('/', addNewAddress);



module.exports = router;