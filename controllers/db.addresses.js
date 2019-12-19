
const {getAllAddresses, getLiveAddressesByCompanyId, postNewAddress, postNewCompanyAddress } = require('../models/db.addresses');



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

module.exports = {fetchAllAddresses, addNewCompanyAddress, fetchLiveAddressesByCompanyId };

