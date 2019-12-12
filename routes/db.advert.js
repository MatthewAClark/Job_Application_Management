
const express  = require('express');

const router = express.Router();

const {addNewAdvert,  fetchAllAdverts, fetchLiveAdverts} = require('../controllers/db.advert');

 router.get('/', fetchAllAdverts);

 router.get('/live', fetchLiveAdverts);


router.post('/', addNewAdvert);



module.exports = router;