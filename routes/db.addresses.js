const express  = require('express');
const router = express.Router();
const {addNewAddress,  fetchAllAddresses, fetchByCompanyId} = require('../controllers/db.addresses');

//  router.get('/', fetchAllAddresses);

router.get('/', fetchAllAddresses)

router.get('/:company_id', fetchByCompanyId)


router.post('/', addNewAddress);



module.exports = router;