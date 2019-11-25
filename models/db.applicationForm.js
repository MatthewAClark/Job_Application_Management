const db = require('../config/index.js');

// application_id SERIAL PRIMARY KEY,
// position_id int,
// question VARCHAR(1000),
// answer VARCHAR(2000),


const postNewQuestion = (position_id, question, answer) => db.one('INSERT INTO application_form (position_id, question, answer) VALUES ($1, $2, $3) RETURNING *', [position_id, question, answer]);  
        
const getAllQuestions = () => db.manyOrNone('SELECT * FROM application_form');

module.exports = {postNewQuestion, getAllQuestions};