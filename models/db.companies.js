
const db = require('../config/index.js');



const postNewCompany = (company_name, sector, industry, website) => db.one('INSERT INTO companies (company_name, sector, industry, website) VALUES ($1, $2, $3, $4) RETURNING *', [company_name, sector, industry, website]);
    
        
const getAllCompanies = () => db.manyOrNone('SELECT * FROM companies');

const getCompanyList = () => db.manyOrNone('SELECT company_id, company_name FROM companies');

const getCompanyById = (company_id) => db.oneOrNone('SELECT * FROM companies WHERE company_id=$1', [company_id]);

// const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts WHERE advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts WHERE live=true');

const putCompanyById = (company_id, company_name, sector, industry, website) => db.one('UPDATE companies SET company_name=$1, sector=$2, industry=$3, website=$4 WHERE company_id=$5 RETURNING *', [company_name, sector, industry, website, company_id])

module.exports = { putCompanyById, getCompanyById, postNewCompany, getAllCompanies, getCompanyList};