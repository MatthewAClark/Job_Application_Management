const {postNewOrganisation, getAllOrganisations, getAllNamesAndIds} = require('../models/db.organisation');

function addNewOrganisation(req, res, next) {
    postNewOrganisation(req.body.organisation_name, req.body.address1, req.body.address2, req.body.address3, req.body.address4, req.body.postcode, req.body.email, req.body.organisation_url, req.body.contact_number, req.body.fax_number)
    .then(data =>  res.status(201).send(data))
          .catch((error) => next({status: 400, error: error}));
}

function fetchAllOrganisations(req, res, next) {
    getAllOrganisations()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

function fetchAllNamesAndIds(req, res, next) {
    getAllNamesAndIds()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ; 
}

module.exports = { addNewOrganisation, fetchAllOrganisations, fetchAllNamesAndIds};


