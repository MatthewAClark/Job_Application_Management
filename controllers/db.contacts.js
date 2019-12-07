const {postNewContact, getAllContacts, getContactsByAddressId} = require('../models/db.contacts');

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

function addNewContact(req, res, next) {
    postNewContact(req.body.address_id, req.body.contact_name, req.body.contact_title, req.body.contact_position, req.body.tel_number1, req.body.tel_number2, req.body.fax, req.body.email, req.body.contact_url, req.body.reference, req.body.date_known)
    .then(data =>  res.status(201).send(data))
          .catch((error) => {console.log(error)
            next({status: 400, error: error})});
}

function fetchAllContacts(req, res, next) {
    getAllContacts()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

function fetchContactsByAddressId(req, res, next) {
    getContactsByAddressId(req.params.address_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewContact, fetchAllContacts, fetchContactsByAddressId};

