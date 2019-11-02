const express  = require('express');
const router = express.Router();
const { fetchAllJobs} = require('../controllers/jobsBoard');

router.get('/', fetchAllJobs);




module.exports = router;