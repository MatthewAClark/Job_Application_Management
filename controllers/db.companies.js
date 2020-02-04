
const {putCompanyById, getCompanyById, getAllCompanies, getCompanyList, postNewCompany} = require('../models/db.companies');



function addNewCompany(req, res, next) {

 
  postNewCompany(req.body.company_name, req.body.sector, req.body.industry, req.body.website)
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

function fetchCompanyById(req, res, next) {
  getCompanyById(req.params.company_id)
  .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function updateCompanyById(req, res, next) {
  putCompanyById(req.params.company_id, req.body.company_name, req.body.sector, req.body.industry, req.body.website)
  .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

const addCompany = (data) => new Promise(function (res, rej) {
  if (data.company_id === null) {
    postNewCompany(data.company_name, data.sector, data.industry, data.website)
      .then(company => res({ ...data, ...company }))
  } else {
    return res(data)
  }
})

module.exports = {addCompany, updateCompanyById, fetchCompanyById, addNewCompany, fetchCompanyList, fetchAllCompanies};

