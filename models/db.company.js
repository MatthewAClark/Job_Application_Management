const db = require('../config/index.js');

// company_id SERIAL PRIMARY KEY,
// company_name VARCHAR(20),
// sector VARCHAR(30),
// industry VARCHAR(30),
// company_url VARCHAR(200)


const postNewCompany = (company_name, sector, industry, company_url) => db.one('INSERT INTO company (company_name, sector, industry, company_url) VALUES ($1, $2, $3, $4) RETURNING *', [company_name, sector, industry, company_url]);  
        
const getAllCompanies = () => db.manyOrNone('SELECT * FROM company');

const getAllCompanyNames = () => db.manyOrNone('SELECT company_id, company_name FROM company')

module.exports = {postNewCompany, getAllCompanies, getAllCompanyNames};