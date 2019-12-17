
const { getAllContacts, getContactsByCompanyId, postNewContact, getContactsByAddressId, getContactsByCompanyAndAddressId } = require('../models/db.contacts');



function addNewContact(req, res, next) {



  // Add new company address into db
  postNewContact(req.body.company_id, req.body.address_id, req.body.contact_name, req.body.contact_position, req.body.capacity_known, req.body.reference, req.body.date_known)

    .then(data => res.status(201).send(
      data))

    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });
}


function fetchContactsByCompanyId(req, res, next) {
  getContactsByCompanyId(req.params.company_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

function fetchContactsByAddressId(req, res, next) {
  getContactsByAddressId(req.params.address_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

function fetchContactsByCompanyAndAddressId(req, res, next) {
  getContactsByAddressId(req.params.company_id, req.params.address_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

function fetchAllContacts(req, res, next) {
  getAllContacts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

function fetchContacts(req, res, next) {
  if (req.query.company_id) {
    if (req.query.address_id) {
      getContactsByCompanyAndAddressId(req.query.company_id, req.query.address_id)
        .then(data => res.status(200).send(data))
        .catch((error) => next({ status: 404, error: error }));
    } else {
      getContactsByCompanyId(req.query.company_id)
        .then(data => res.status(200).send(data))
        .catch((error) => next({ status: 404, error: error }));
    }
  } else if (req.query.address_id) {
    getContactsByAddressId(req.query.address_id)
      .then(data => res.status(200).send(data))
      .catch((error) => next({ status: 404, error: error }))
  } else getAllContacts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

module.exports = { fetchAllContacts, fetchContactsByCompanyId, addNewContact, fetchContactsByAddressId, fetchContactsByCompanyAndAddressId, fetchContacts };

