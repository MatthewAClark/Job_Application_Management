const express  = require('express');
const router = express.Router();
const {addNewComment,  fetchAllComments} = require('../controllers/db.comments');

 router.get('/', fetchAllComments);




router.post('/', addNewComment);



module.exports = router;