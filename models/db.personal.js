const db = require('../config/index.js');

// personal_id SERIAL PRIMARY KEY,
// user_id INT,
// contact_id INT,
// personal_name VARCHAR(20),
// additional_info VARCHAR(1000),
// personal_profile VARCHAR(1000),
// hobbie_interests VARCHAR(500),
// ni_number VARCHAR(9)


const postNewPersonal = (user_id, contact_id, personal_name, additional_info, personal_profile, hobbie_interests, ni_number) => db.one('INSERT INTO personal (user_id, contact_id, personal_name, additional_info, personal_profile, hobbie_interests, ni_number) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [user_id, contact_id, personal_name, additional_info, personal_profile, hobbie_interests, ni_number]);  
        
const getAllPersonals = () => db.manyOrNone('SELECT * FROM personal');

module.exports = {postNewPersonal, getAllPersonals};