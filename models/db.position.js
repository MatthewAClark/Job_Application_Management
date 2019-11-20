const db = require('../config/index.js');

// position_id SERIAL PRIMARY KEY,
// address_id INT,
// contact_id INT,
// job_title VARCHAR(30),
// occupation_sector VARCHAR(50),


const postNewPosition = (address_id, contact_id, job_title, occupation_sector) => db.one('INSERT INTO position (address_id, contact_id, job_title, occupation_sector) VALUES ($1, $2, $3, $4) RETURNING *', [address_id, contact_id, job_title, occupation_sector]);  
        
const getAllPositions = () => db.manyOrNone('SELECT * FROM position');

module.exports = {postNewPosition, getAllPositions};