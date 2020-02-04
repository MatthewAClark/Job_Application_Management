
const { getContactById, putContactById, getAllContactMethods, getContactMethodsById, getAllContacts, getContactsByCompanyId, postNewContact, getContactsByAddressId, getContactsByCompanyAndAddressId, postContactMethod, getLiveContactsByAddressId, getLiveContactsByCompanyAndAddressId, getLiveContactsByCompanyId, getLiveAllContacts } = require('../models/db.contacts');



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

function updateContactById(req, res, next) {



  // update
  putContactById(req.body.contact_id, req.body.company_id, req.body.address_id, req.body.contact_name, req.body.contact_position, req.body.capacity_known, req.body.reference, req.body.date_known, req.body.live)

    .then(data => res.status(200).send(data))

    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });
}

function addContactMethod(req, res, next) {

  // Add new company address into db
  postContactMethod(req.body.contact_id, req.body.contact_method, req.body.contact_value)

    .then(data => res.status(201).send(
      data))

    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });
}

function fetchAllContactMethods(req, res, next) {
  getAllContactMethods()
  .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}


function fetchContactsByCompanyId(req, res, next) {
  getContactsByCompanyId(req.params.company_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

function fetchContactById(req, res, next) {
  getContactsByCompanyId(req.params.contact_id)
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

function fetchContactMethodsById(req, res, next) {
  getContactMethodsById(req.params.contact_id)
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

function fetchLiveContacts(req, res, next) {
  if (req.query.company_id) {
    if (req.query.address_id) {
      getLiveContactsByCompanyAndAddressId(req.query.company_id, req.query.address_id)
        .then(data => res.status(200).send(data))
        .catch((error) => next({ status: 404, error: error }));
    } else {
      getLiveContactsByCompanyId(req.query.company_id)
        .then(data => res.status(200).send(data))
        .catch((error) => next({ status: 404, error: error }));
    }
  } else if (req.query.address_id) {
    getLiveContactsByAddressId(req.query.address_id)
      .then(data => res.status(200).send(data))
      .catch((error) => next({ status: 404, error: error }))
  } else getLiveAllContacts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

const addContacts = (data) => new Promise(function (res, rej) {

  Promise.all(data.contacts.map((contact, i) => {
    if (contact.contact_id === null) {
      return postNewContact(contact.company_id, contact.address_id, contact.contact_name, contact.contact_position, contact.capacity_known, contact.reference, contact.date_known)
        .then(contact => {
           var contacts = data.contacts
           var contact_methods = data.contacts[i].contact_methods.map(method => {
            return {...method, contact_id: contact.contact_id}
          })
          contacts[i] = {...contact, contact_methods: contact_methods}
          data = { ...data, contacts: contacts }
        })
    }

  }))
    .then(() => res(data))
})

const addContactMethods = (contact) => new Promise(function (res, rej) {
  Promise.all(contact.contact_methods.map((method, i) => {
    if (method.method_id === null) {
      return postContactMethod(method.contact_id, method.contact_method, method.contact_value)
        .then(method => {
          var methods = contact.contact_methods
          methods[i] = method
          contact = { ...contact, contact_methods: methods }
        })
    }

  }))
    .then(() => res(contact))


})

module.exports = { updateContactById, fetchLiveContacts, fetchAllContactMethods, fetchContactById, fetchContactMethodsById, fetchAllContacts, fetchContactsByCompanyId, addNewContact, fetchContactsByAddressId, fetchContactsByCompanyAndAddressId, fetchContacts, addContactMethod, addContacts, addContactMethods };

