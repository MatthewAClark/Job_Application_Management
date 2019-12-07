const express  = require('express');
const router = express.Router();
const {addNewContractAndPosition,  fetchAllContracts} = require('../controllers/db.jobContract');

router.get('/', fetchAllContracts);

router.post('/', addNewContractAndPosition);



module.exports = router;