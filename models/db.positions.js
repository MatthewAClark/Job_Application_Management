const db = require('../config/index.js');

// position_id SERIAL PRIMARY KEY,
// address_id INT,
// contact_id INT,
// job_title VARCHAR(30),
// profession_id int,


const postNewPosition = (address_id, contact_id, job_title, profession_id) => db.one('INSERT INTO position (address_id, contact_id, job_title, profession_id) VALUES ($1, $2, $3, $4) RETURNING *', [address_id, contact_id, job_title, profession_id]);  
        
const getAllPositions = () => db.manyOrNone('SELECT * FROM position');

module.exports = {postNewPosition, getAllPositions};