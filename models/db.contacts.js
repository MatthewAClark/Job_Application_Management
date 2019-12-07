const db = require('../config/index.js');

// contact_id SERIAL PRIMARY KEY,
// address_id INT,
// contact_name VARCHAR(50),
// contact_title VARCHAR(50),
// contact_position VARCHAR(50),
// tel_number1 VARCHAR(12),
// tel_number2 VARCHAR(12),
// fax VARCHAR(12),
// email VARCHAR(100),
// contact_url VARCHAR(200),
// reference BOOLEAN,
// date_known DATE,
// live BOOLEAN,
// FOREIGN KEY (address_id) REFERENCES addresses(address_id)


const postNewContact = (address_id, contact_name, contact_title, contact_position, tel_number1, tel_number2, fax, email, contact_url, reference, date_known) => db.one('INSERT INTO contacts (address_id, contact_name, contact_title, contact_position, tel_number1, tel_number2, fax, email, contact_url, reference, date_known, live) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *', [address_id, contact_name, contact_title, contact_position, tel_number1, tel_number2, fax, email, contact_url, reference, date_known, true]);  

// const getContactsWithAddress = () => db.manyOrNone('SELECT * FROM contacts WHERE add')
        
const getAllContacts = () => db.manyOrNone('SELECT * FROM contacts');

const getContactsByAddressId = (address_id) => db.manyOrNone('SELECT * FROM contacts WHERE address_id=$1', [address_id])

module.exports = {postNewContact, getAllContacts, getContactsByAddressId};