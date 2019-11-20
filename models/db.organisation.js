const db = require('../config/index.js');

const postNewOrganisation = (company_name, sector, industry, company_url) => db.one('INSERT INTO company (company_name, sector, industry, company_url) VALUES ($1, $2, $3, $4) RETURNING *', [company_name, sector, industry, company_url]);


const getAllOrganisations = () => db.manyOrNone('SELECT * FROM company');

const getAllNamesAndIds = () => db.manyOrNone('SELECT company_id, company_name FROM company');


module.exports = {postNewOrganisation, getAllOrganisations, getAllNamesAndIds};

