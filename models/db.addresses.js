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


const postNewAddress = (company_id, line_1, line_2, town_city, county_state, country, postcode_zipcode) => db.one('INSERT INTO company (company_id, line_1, line_2, town_city, county_state, country, postcode_zipcode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [company_id, line_1, line_2, town_city, county_state, country, postcode_zipcode]);  
        
const getAllAddresses = () => db.manyOrNone('SELECT * FROM addresses');

module.exports = {postNewAddress, getAllAddresses};