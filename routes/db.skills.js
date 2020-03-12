
const express  = require('express');

const router = express.Router();

const { addNewSkill, fetchAllSkills, fetchListSkills } = require('../controllers/db.skills');

 router.get('/', fetchAllSkills);

 router.get('/list', fetchListSkills);


router.post('/', addNewSkill);



module.exports = router;