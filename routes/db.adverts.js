
const express  = require('express');

const router = express.Router();

const {addNewAdvert,  fetchAllAdverts, fetchLiveAdverts, fetchAdvertById, updateAdvertById} = require('../controllers/db.adverts');

 router.get('/', fetchAllAdverts);

 router.get('/live', fetchLiveAdverts);

 router.get('/:advert_id', fetchAdvertById);

router.put('/:advert_id', updateAdvertById)

router.post('/', addNewAdvert);



module.exports = router;