
const db = require('../config/index.js');



const postNewSkill = (skill_name, description_long, description_short) => db.one('INSERT INTO skills (skill_name, description_long, description_short) VALUES ($1, $2, $3) RETURNING *', [skill_name, description_long, description_short]);





// const getContactsByCompanyAndAddressId = (company_id, address_id) => db.manyOrNone('SELECT * FROM contacts WHERE company_id=$1 AND address_id=$2', [company_id, address_id]);

// const getContactsByAddressId = (address_id) => db.manyOrNone('SELECT * FROM contacts WHERE address_id=$1', [address_id]);


const getAllSkills = () => db.manyOrNone('SELECT * FROM skills');


// const getContactValues = () => db.manyOrNone('SELECT * FROM contact_values');

// const getContactValuesById = (contact_id) => db.manyOrNone('SELECT * FROM contact_values WHERE contact_id=$1',[contact_id])

// const putAdvertById = (advert_id, company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location) => db.one('UPDATE adverts SET company_name=$1, job_title=$2, advert_ref=$3, contract_type=$4, full_time_part_time=$5, date_posted=$6, closing_date=$7, live=$8, website=$9, min_salary=$10, max_salary=$11, advert_description=$12, agency=$13, job_board=$14, voluntary=$15, job_location=$16 WHERE advert_id=$17 RETURNING *', [company_name, job_title, advert_ref, contract_type, full_time_part_time, date_posted, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, advert_id])

module.exports = {getAllSkills, postNewSkill};