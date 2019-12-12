
const db = require('../config/index.js');



const postNewAdvert = ( company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('INSERT INTO adverts (company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *', [company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, true, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location]);
    
        
const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts');

const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts WHERE live=true');

module.exports = {postNewAdvert, getAllAdverts, getLiveAdverts};