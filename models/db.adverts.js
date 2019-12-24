
const db = require('../config/index.js');



const postNewAdvert = ( company_id, contact_id, address_id, job_title, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('INSERT INTO adverts (company_id, contact_id, address_id, job_title, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *', [company_id, contact_id, address_id, job_title, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, true, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, false]);
    
        
const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts WHERE advert_id=$1', [advert_id]);

const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const putAdvertById = (advert_id, company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('UPDATE adverts SET company_name=$1, job_title=$2, advert_ref=$3, contract_type=$4, full_time_part_time=$5, date_posted=$6, closing_date=$7, live=$8, website=$9, min_salary=$10, max_salary=$11, advert_description=$12, agency=$13, job_board=$14, voluntary=$15, job_location=$16 WHERE advert_id=$17 RETURNING *', [company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, advert_id])

module.exports = {postNewAdvert, getAllAdverts, getLiveAdverts, getAdvertById, putAdvertById};