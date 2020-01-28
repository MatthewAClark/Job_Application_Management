
const express  = require('express');

const router = express.Router();

const {fetchAddressById, fetchAllAddresses, fetchLiveAddressesByCompanyId, addNewCompanyAddress, updateAddressById} = require('../controllers/db.addresses');

 router.get('/', fetchAllAddresses);

//  router.get('/live', fetchLiveAdverts);

 router.get('/companies/live/:company_id', fetchLiveAddressesByCompanyId);

 router.get('/:address_id', fetchAddressById)

//  router.put('/:advert_id', updateAdvertById)

router.post('/', addNewCompanyAddress);

router.put('/:address_id', updateAddressById)



module.exports = router;