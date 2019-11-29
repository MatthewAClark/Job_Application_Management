
const db = require('../config/index.js');

// advert_id SERIAL PRIMARY KEY,
// position_id INT,
// address_id INT,
// contact_id INT,
// advert_ref VARCHAR(10),
// contract_type VARCHAR(10),
// full_time BOOLEAN,
// date_posted DATE,
// date_applied DATE,
// closing_date DATE,
// date_seen TIMESTAMP,
// live BOOLEAN,
// advert_url VARCHAR(200),
// min_salary VARCHAR(10),
// max_salary VARCHAR(10),
// advert_description VARCHAR(8000),
// agency BOOLEAN,
// job_board VARCHAR(20),
// paid BOOLEAN,

// Creating position first, then adding to advert table with that position

const postNewAdvert = (position_id, address_id, contact_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, date_seen, advert_url, min_salary, max_salary, advert_description, agency, job_board, paid) => db.one('INSERT INTO advert (position_id, address_id, contact_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, date_seen, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, paid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *', [position_id, address_id, contact_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, date_seen, true, advert_url, min_salary, max_salary, advert_description, agency, job_board, paid]);
    
        
const getAllAdverts = () => db.manyOrNone('SELECT * FROM advert');

module.exports = {postNewAdvert, getAllAdverts};