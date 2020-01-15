
const db = require('../config/index.js');



const postNewAdvert = ( position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('INSERT INTO adverts (position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *', [position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, true, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, false]);
    
        
// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN positions ON adverts.position_id=positions.position_id FULL JOIN correspondence ON adverts.correspondence_id=correspondence.correspondence_id FULL JOIN companies ON correspondence.company_id=companies.company_id');

const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts FULL JOIN positions ON adverts.position_id=positions.position_id FULL JOIN correspondence ON adverts.correspondence_id=correspondence.correspondence_id FULL JOIN companies ON correspondence.company_id=companies.company_id WHERE adverts.advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN positions ON adverts.position_id=positions.position_id FULL JOIN correspondence ON adverts.correspondence_id=correspondence.correspondence_id FULL JOIN companies ON correspondence.company_id=companies.company_id WHERE adverts.live=true');

const putAdvertById = (advert_id, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied) => {
    console.log(job_title, advert_description)
    return db.one('UPDATE adverts SET advert_ref=$2, contract_type=$3, full_time_part_time=$4, date_posted=$5, closing_date=$6, live=$7, advert_url=$8, min_salary=$9, max_salary=$10, advert_description=$11, agency=$12, job_board=$13, voluntary=$14, job_location=$15, applied=$16 WHERE advert_id=$17 RETURNING *', [advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied, advert_id]);
}
module.exports = {postNewAdvert, getAllAdverts, getLiveAdverts, getAdvertById, putAdvertById};