
const { putAddressById, getAddressById, getAllAddresses, getLiveAddressesByCompanyId, postNewAddress, postNewCompanyAddress } = require('../models/db.addresses');



function addNewCompanyAddress(req, res, next) {



  // Add new company address into db
  postNewAddress(req.body.company_id, req.body.address_field, req.body.postcode)

    .then(data => res.status(201).send(
      data))

    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });
}

function updateAddressById(req, res, next) {
  putAddressById(req.params.address_id, req.body.company_id, req.body.address_field, req.body.postcode)

    .then(data => res.status(200).send(
      data))

    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });
}


function fetchLiveAddressesByCompanyId(req, res, next) {
  getLiveAddressesByCompanyId(req.params.company_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

function fetchAllAddresses(req, res, next) {
  getAllAddresses()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

function fetchAddressById(req, res, next) {
  getAddressById(req.params.address_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

const addAddress = (data) => new Promise(function (res, rej) {
  if (data.address_id === null) {
    postNewAddress(data.company_id, data.address_field, data.postcode, data.live)
      .then(address => res({ ...data, ...address }))
  } else {
    return res(data)
  }
});

module.exports = {addAddress, updateAddressById, fetchAddressById, fetchAllAddresses, addNewCompanyAddress, fetchLiveAddressesByCompanyId };

