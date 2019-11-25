const express  = require('express');
const router = express.Router();
const {addNewPosition,  fetchAllPositions} = require('../controllers/db.positions');

 router.get('/', fetchAllPositions);




router.post('/', addNewPosition);



module.exports = router;