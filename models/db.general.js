const db = require('../config/index.js');

const getAllLocationsAndCompanies = () =>db.manyOrNone('SELECT company.company_id, company.company_name, addresses.address_id, addresses.town_city FROM company FULL JOIN addresses ON company.company_id=addresses.company_id;');



module.exports = {getAllLocationsAndCompanies};