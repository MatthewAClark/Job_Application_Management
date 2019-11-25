const express  = require('express');
const router = express.Router();
const {addNewContract,  fetchAllContracts} = require('../controllers/db.jobContract');

router.get('/', fetchAllContracts);

router.post('/', addNewContract);



module.exports = router;