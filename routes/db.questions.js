const express  = require('express');
const router = express.Router();
const {addNewQuestion,  fetchAllQuestions} = require('../controllers/db.applicationForm');

 router.get('/', fetchAllQuestions);




router.post('/', addNewQuestion);



module.exports = router;