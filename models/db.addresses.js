
const db = require('../config/index.js');



const postNewAddress = (company_id, address_field, postcode) => db.one('INSERT INTO addresses (company_id, address_field, postcode) VALUES ($1, $2, $3) RETURNING *', [company_id, address_field, postcode]);

const getAddressesByCompanyId = (company_id) => db.manyOrNone('SELECT * FROM addresses WHERE company_id=$1', [company_id]);


const getAllAddresses = () => db.manyOrNone('SELECT * FROM addresses');

// const putAdvertById = (advert_id, company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('UPDATE adverts SET company_name=$1, job_title=$2, advert_ref=$3, contract_type=$4, full_time_part_time=$5, date_posted=$6, closing_date=$7, live=$8, website=$9, min_salary=$10, max_salary=$11, advert_description=$12, agency=$13, job_board=$14, voluntary=$15, job_location=$16 WHERE advert_id=$17 RETURNING *', [company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, advert_id])

module.exports = {postNewAddress, getAddressesByCompanyId, getAllAddresses};