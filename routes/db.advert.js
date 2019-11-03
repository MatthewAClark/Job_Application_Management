const express  = require('express');
const router = express.Router();
const {addNewJob,  fetchAllJobs} = require('../controllers/db.advert');

 router.get('/', fetchAllJobs);




router.post('/', addNewJob);



module.exports = router;