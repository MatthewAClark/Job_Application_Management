
const db = require('../config/index.js');



const postNewAdvert = ( position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('INSERT INTO adverts (position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *', [position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, true, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, false]);

const seedNewAdvert = (advert_id, position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied) => db.one('INSERT INTO adverts (advert_id, position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *', [advert_id, position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied]);
    
const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts');  

const getAllAdvertsWithCompanies = () => db.manyOrNone('SELECT adverts.*, companies.company_name FROM adverts LEFT JOIN companies ON adverts.company_id=companies.company_id');

// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN applications ON adverts.advert_id=applications.advert_id FULL JOIN correspondence ON adverts.correspondence_id=correspondence.correspondence_id FULL JOIN companies ON correspondence.company_id=companies.company_id');

const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts FULL JOIN positions ON adverts.position_id=positions.position_id FULL JOIN position_contacts ON adverts.correspondence_id=correspondence.correspondence_id FULL JOIN companies ON correspondence.company_id=companies.company_id FULL JOIN addresses ON addresses.address_id=correspondence.address_id FULL JOIN contacts ON contacts.contact_id=correspondence.contact_id FULL JOIN professions ON positions.profession_id=professions.profession_id WHERE adverts.advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN positions ON adverts.position_id=positions.position_id FULL JOIN correspondence ON adverts.correspondence_id=correspondence.correspondence_id FULL JOIN companies ON correspondence.company_id=companies.company_id WHERE adverts.live=true');

const putAdvertById = (advert_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied) => {
    return db.one('UPDATE adverts SET advert_ref=$1, contract_type=$2, full_time_part_time=$3, date_posted=$4, date_seen=$5, closing_date=$6, live=$7, advert_url=$8, min_salary=$9, max_salary=$10, advert_description=$11, agency=$12, job_board=$13, voluntary=$14, job_location=$15, applied=$16 WHERE advert_id=$17 RETURNING *', [advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied, advert_id]);
}
module.exports = {seedNewAdvert, getAllAdvertsWithCompanies, postNewAdvert, getAllAdverts, getLiveAdverts, getAdvertById, putAdvertById};