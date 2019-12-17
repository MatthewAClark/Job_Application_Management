
const { getAddressesByCompanyId, postNewAddress, postNewCompanyAddress } = require('../models/db.addresses');



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


function fetchAddressesByCompanyId(req, res, next) {
  getAddressesByCompanyId(req.params.company_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

module.exports = { addNewCompanyAddress, fetchAddressesByCompanyId };

