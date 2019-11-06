const db = require('../config/index.js');

const postNewJob = (organisation_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, date_seen, live, advert_url, min_salary, max_salary, job_title, job_description, job_location, job_field, agency) => db.one('INSERT INTO advert (organisation_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, date_seen, live, advert_url, min_salary, max_salary, job_title, job_description, job_location, job_field, agency) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *', [organisation_id, advert_ref, contract_type, full_time, date_posted, date_applied, closing_date, date_seen, live, advert_url, min_salary, max_salary, job_title, job_description, job_location, job_field, agency]);

const getAllJobs = () => db.manyOrNone('SELECT * FROM advert');

module.exports = {postNewJob, getAllJobs};