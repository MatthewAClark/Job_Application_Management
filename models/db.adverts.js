
const db = require('../config/index.js');



const postNewAdvert = ( occupation_id, company_id, address_id, position_title, advert_ref, contract_type, contract_hours, date_posted, date_seen, closing_date, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('INSERT INTO adverts (occupation_id, company_id, address_id, position_title, advert_ref, contract_type, contract_hours, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *', [occupation_id, company_id, address_id, position_title, advert_ref, contract_type, contract_hours, date_posted, date_seen, closing_date, true, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location]);

const seedNewAdvert = (advert_id, occupation_id, company_id, address_id, position_title, advert_ref, contract_type, contract_hours, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('INSERT INTO adverts (advert_id, occupation_id, company_id, address_id, position_title, advert_ref, contract_type, contract_hours, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *', [advert_id, occupation_id, company_id, address_id, position_title, advert_ref, contract_type, contract_hours, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location]);
    
// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts');  

const getAllAdverts = () => db.manyOrNone('SELECT adverts.*, companies.company_name FROM adverts LEFT JOIN companies ON adverts.company_id=companies.company_id');

const getLiveAdverts = () => db.manyOrNone('SELECT adverts.*, companies.company_name FROM adverts LEFT JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const getAllAdvertContacts = (advert_id) => db.manyOrNone('SELECT * FROM contacts RIGHT JOIN advert_contacts ON advert_contacts.contact_id=contacts.contact_id WHERE advert_contacts.advert_id=$1', [advert_id])

// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN applications ON adverts.advert_id=applications.advert_id FULL JOIN correspondence ON adverts.correspondence_id=correspondence.correspondence_id FULL JOIN companies ON correspondence.company_id=companies.company_id');

const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts LEFT JOIN companies ON adverts.company_id=companies.company_id LEFT JOIN occupations ON adverts.occupation_id=occupations.occupation_id LEFT JOIN addresses ON adverts.address_id=addresses.address_id WHERE adverts.advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');


const putAdvertById = (advert_id, occupation_id, company_id, address_id, position_title, advert_ref, contract_type, contract_hours, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => {
    return db.one('UPDATE adverts SET occupation_id=$1, company_id=$2, address_id=$3, position_title=$4, advert_ref=$5, contract_type=$6, contract_hours=$7, date_posted=$8, date_seen=$9, closing_date=$10, live=$11, advert_url=$12, min_salary=$13, max_salary=$14, advert_description=$15, agency=$16, job_board=$17, voluntary=$18, job_location=$19 WHERE advert_id=$20 RETURNING *', [occupation_id, company_id, address_id, position_title, advert_ref, contract_type, contract_hours, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, advert_id]);
}

const postAdvertContact = (advert_id, contact_id) => {
    return db.one('INSERT INTO advert_contacts (contact_id, advert_id) VALUES ($1, $2) RETURNING *', [contact_id, advert_id])
}

module.exports = {postAdvertContact, getAllAdvertContacts, seedNewAdvert, postNewAdvert, getAllAdverts, getLiveAdverts, getAdvertById, putAdvertById};