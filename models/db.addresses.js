const db = require('../config/index.js');

// address_id SERIAL PRIMARY KEY,
// company_id INT,
// line_1 VARCHAR(30),
// line_2 VARCHAR(30),
// town_city VARCHAR(20),
// county_state VARCHAR(20),
// country VARCHAR(30),
// postcode_zipcode VARCHAR(8),
// FOREIGN KEY (company_id) REFERENCES company(company_id)


const postNewAddress = (company_id, line_1, line_2, town_city, county_state, country, postcode_zipcode) => db.one('INSERT INTO addresses (company_id, line_1, line_2, town_city, county_state, country, postcode_zipcode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [company_id, line_1, line_2, town_city, county_state, country, postcode_zipcode]);  
        
const getAllAddresses = () => db.manyOrNone('SELECT * FROM addresses');

const getAddressesWithCompanyNames = () => db.manyOrNone('SELECT company.company_name, addresses.address_id, addresses.line_1, addresses.line_2, addresses.town_city, addresses.county_state, addresses.country, addresses.postcode_zipcode FROM company FULL JOIN addresses ON company.company_id=addresses.company_id')

const getAddressesByCompanyId = (company_id) => db.manyOrNone('SELECT * FROM addresses WHERE company_id = $1', [company_id])

module.exports = {postNewAddress, getAllAddresses, getAddressesWithCompanyNames, getAddressesByCompanyId};