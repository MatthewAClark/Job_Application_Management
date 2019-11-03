const db = require('../config/index.js');

const postNewJob = (organisation_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, live, advert_url, min_salary, max_salary, job_title, job_description, job_location, job_field) => db.one('INSERT INTO advert (organisation_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, live, advert_url, min_salary, max_salary, job_title, job_description, job_location, job_field) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *', [organisation_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, live, advert_url, min_salary, max_salary, job_title, job_description, job_location, job_field]);

module.exports = {postNewJob}