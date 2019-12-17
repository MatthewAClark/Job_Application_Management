
const { getAllCompanies, getCompanyList, postNewCompany} = require('../models/db.companies');



function addNewCompany(req, res, next) {

 
  postNewCompany(req.body.company_name)
    .then(data => res.status(201).send(data))
    .catch((error) => {
    
      return next({ status: 400, error: error })
    });
}

function fetchAllCompanies(req, res, next) {
  getAllCompanies()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchCompanyList(req, res, next) {
  getCompanyList()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

module.exports = { addNewCompany, fetchCompanyList, fetchAllCompanies};

