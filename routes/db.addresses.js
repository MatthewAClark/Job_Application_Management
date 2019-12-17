
const express  = require('express');

const router = express.Router();

const {fetchAddressesByCompanyId, addNewCompanyAddress} = require('../controllers/db.addresses');

//  router.get('/', fetchAllAdverts);

//  router.get('/live', fetchLiveAdverts);

 router.get('/companies/:company_id', fetchAddressesByCompanyId);

//  router.put('/:advert_id', updateAdvertById)

router.post('/company/', addNewCompanyAddress);



module.exports = router;