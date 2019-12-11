const db = require('../config/index.js');

// school_id SERIAL PRIMARY KEY,
//     contact_id INT,
//     address_id INT,
//     school_name VARCHAR(50),
//     school_type VARCHAR(20),
//     date_from DATE,
//     date_to DATE,
//     FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
//     FOREIGN KEY (address_id) REFERENCES addresses(address_id)


const postNewSchool = (contact_id, address_id, school_name, school_type, date_from, date_to) => db.one('INSERT INTO schools (contact_id, address_id, school_name, school_type, date_from, date_to) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [contact_id, address_id, school_name, school_type, date_from, date_to]);  
        
const getAllSchools = () => db.manyOrNone('SELECT * FROM schools');

module.exports = {postNewSchool, getAllSchools};