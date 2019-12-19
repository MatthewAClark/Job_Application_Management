
const express  = require('express');

const router = express.Router();

const {fetchAllAddresses, fetchLiveAddressesByCompanyId, addNewCompanyAddress} = require('../controllers/db.addresses');

 router.get('/', fetchAllAddresses);

//  router.get('/live', fetchLiveAdverts);

 router.get('/companies/live/:company_id', fetchLiveAddressesByCompanyId);

//  router.put('/:advert_id', updateAdvertById)

router.post('/company/', addNewCompanyAddress);



module.exports = router;