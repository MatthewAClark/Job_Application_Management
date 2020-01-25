
const db = require('../config/index.js');



const postNewApplication = ( address_id, position_id, advert_id, company_id, cv_id, cover_letter, applied, date_applied) => db.one('INSERT INTO applications (address_id, position_id, advert_id, company_id, cv_id, cover_letter, applied, date_applied) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [address_id, position_id, advert_id, company_id, cv_id, cover_letter, applied, date_applied]);
    
        
const getAllApplications = () => db.manyOrNone('SELECT * FROM applications');

const getApplicationById = (application_id) => db.oneOrNone('SELECT * FROM applications WHERE application_id=$1', [application_id]);

const putApplicationById = (application_id, address_id, company_id, cv_id, cover_letter, applied, date_applied) => db.one('UPDATE applications SET address_id=$1, company_id=$2, cv_id=$3, cover_letter=$4, applied=$5, date_applied=$6 WHERE application_id=$7 RETURNING *', [address_id, company_id, cv_id, cover_letter, applied, date_applied, application_id])

module.exports = {postNewApplication, getAllApplications, getApplicationById, putApplicationById};