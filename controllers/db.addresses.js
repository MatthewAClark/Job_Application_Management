const {postNewAddress, getAllAddresses} = require('../models/db.addresses');

// address_id SERIAL PRIMARY KEY,
// company_id INT,
// line_1 VARCHAR(30),
// line_2 VARCHAR(30),
// town_city VARCHAR(20),
// county_state VARCHAR(20),
// country VARCHAR(30),
// postcode_zipcode VARCHAR(8),


function addNewAddress(req, res, next) {
    postNewAddress(req.body.company_id, req.body.line_1, req.body.line_2, req.body.town_city, req.body.county_state, req.body.country, req.body.postcode_zipcode)
    .then(data =>  res.status(201).send(data))
          .catch((error) => {console.log(error)
            return next({status: 400, error: error})});
}

function fetchAllAddresses(req, res, next) {
    getAllAddresses()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewAddress, fetchAllAddresses};

