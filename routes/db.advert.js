const express  = require('express');
const router = express.Router();
const {addNewAdvert,  fetchAllAdverts} = require('../controllers/db.advert');

 router.get('/', fetchAllAdverts);




router.post('/', addNewAdvert);



module.exports = router;