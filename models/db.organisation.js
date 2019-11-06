const db = require('../config/index.js');

const postNewOrganisation = (organisation_name, address1, address2, address3, address4, postcode, email, organisation_url, contact_number, fax_number) => db.one('INSERT INTO organisation (organisation_name, address1, address2, address3, address4, postcode, email, organisation_url, contact_number, fax_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [organisation_name, address1, address2, address3, address4, postcode, email, organisation_url, contact_number, fax_number]);


const getAllOrganisations = () => db.manyOrNone('SELECT * FROM organisation');

module.exports = {postNewOrganisation, getAllOrganisations};

