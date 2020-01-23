
const { getOccupationList, getOccupations } = require('../models/db.occupations');



// function addNewCompany(req, res, next) {


//   postNewCompany(req.body.company_name, req.body.sector, req.body.industry, req.body.website)
//     .then(data => res.status(201).send(data))
//     .catch((error) => {

//       return next({ status: 400, error: error })
//     });
// }

// function fetchAllCompanies(req, res, next) {
//   getAllCompanies()
//     .then(data => res.status(200).send(data))
//     .catch((error) => next({ status: 404, error: error }));
// }

// function fetchCompanyList(req, res, next) {
//   getCompanyList()
//     .then(data => res.status(200).send(data))
//     .catch((error) => next({ status: 404, error: error }));
// }

// function fetchCompanyById(req, res, next) {
//   getCompanyById(req.params.company_id)
//   .then(data => res.status(200).send(data))
//     .catch((error) => next({ status: 404, error: error }));
// }

function fetchOccupationList(req, res, next) {
  getOccupationList()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchOccupations(req, res, next) {
  getOccupations()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

module.exports = {fetchOccupations, fetchOccupationList};

