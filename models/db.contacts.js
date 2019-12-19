
const db = require('../config/index.js');



const postNewContact = (company_id, address_id, contact_name, contact_position, capacity_known, reference, date_known) => db.one('INSERT INTO contacts (company_id, address_id, contact_name, contact_position, capacity_known,reference, date_known, live) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [company_id, address_id, contact_name, contact_position, capacity_known, reference, date_known, true]);

const postContactValue = (contact_id, contact_type, contact_value) => db.one('INSERT INTO contact_values (contact_id, contact_type, contact_value) VALUES ($1, $2, $3) RETURNING *', [contact_id, contact_type, contact_value]);

const getContactsByCompanyId = (company_id) => db.manyOrNone('SELECT * FROM contacts WHERE company_id=$1', [company_id]);

const getContactsByCompanyAndAddressId = (company_id, address_id) => db.manyOrNone('SELECT * FROM contacts WHERE company_id=$1 AND address_id=$2', [company_id, address_id]);

const getContactsByAddressId = (address_id) => db.manyOrNone('SELECT * FROM contacts WHERE address_id=$1', [address_id]);


const getAllContacts = () => db.manyOrNone('SELECT * FROM contacts');

const getContactValuesById = (contact_id) => db.manyOrNone('SELECT * FROM contact_values WHERE contact_id = $1',[contact_id])

// const putAdvertById = (advert_id, company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('UPDATE adverts SET company_name=$1, job_title=$2, advert_ref=$3, contract_type=$4, full_time_part_time=$5, date_posted=$6, closing_date=$7, live=$8, website=$9, min_salary=$10, max_salary=$11, advert_description=$12, agency=$13, job_board=$14, voluntary=$15, job_location=$16 WHERE advert_id=$17 RETURNING *', [company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, advert_id])

module.exports = {getAllContacts, getContactValuesById, getContactsByCompanyId, postNewContact, getContactsByAddressId, getContactsByCompanyAndAddressId, postContactValue};