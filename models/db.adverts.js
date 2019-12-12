
const db = require('../config/index.js');



const postNewAdvert = (position_id, address_id, contact_id, job_title, advert_ref, contract_type, full_time, date_posted, closing_date, date_seen, advert_url, min_salary, max_salary, advert_description, agency, job_board, paid, job_location) => db.one('INSERT INTO adverts (position_id, address_id, contact_id, job_title, advert_ref, contract_type, full_time, date_posted, closing_date, date_seen, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, paid, job_location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *', [position_id, address_id, contact_id, job_title, advert_ref, contract_type, full_time, date_posted, closing_date, date_seen, true, advert_url, min_salary, max_salary, advert_description, agency, job_board, paid, job_location]);
    
        
const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts');

const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts WHERE live=true');

module.exports = {postNewAdvert, getAllAdverts, getLiveAdverts};