
const express  = require('express');

const router = express.Router();

const { fetchRequirementsByAdvertId, fetchAllRequirements, fetchAllAdvertsRaw, addNewAdvert,  fetchAllAdverts, fetchLiveAdverts, fetchAdvertById, updateAdvertById, fetchAdvertContactsByAdvertId} = require('../controllers/db.adverts');

 router.get('/requirements', fetchAllRequirements);

 router.get('/requirements/:advert_id', fetchRequirementsByAdvertId);

 router.get('/', fetchAllAdverts);

 router.get('/contacts/:advert_id', fetchAdvertContactsByAdvertId);

 router.get('/live', fetchLiveAdverts);

 router.get('/raw', fetchAllAdvertsRaw)

 router.get('/:advert_id', fetchAdvertById);

router.put('/:advert_id', updateAdvertById)

router.post('/', addNewAdvert);





module.exports = router;