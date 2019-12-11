const db = require('../config/index.js');

// company_id SERIAL PRIMARY KEY,
// company_name VARCHAR(20),
// sector VARCHAR(30),
// industry VARCHAR(30),
// company_url VARCHAR(200)


const postNewCompany = (company_name, sector, industry, company_url) => db.one('INSERT INTO companies(company_name, sector, industry, company_url) VALUES ($1, $2, $3, $4) RETURNING *', [company_name, sector, industry, company_url]);  
        
const getAllCompanies = () => db.manyOrNone('SELECT * FROM companies');

const getCompanyAddresses = (company_id) => db.manyOrNone('SELECT * FROM company_address RIGHT JOIN addresses ON company_address.address_id=addresses.address_id WHERE company_address.company_id = $1', [company_id]);

const getCompanyList = () => db.manyOrNone('SELECT company_id, company_name FROM companies')

module.exports = {postNewCompany, getAllCompanies, getCompanyList, getCompanyAddresses};