
const { getProfessionList, getProfessions } = require('../models/db.professions');



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

function fetchProfessionList(req, res, next) {
  getProfessionList()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchProfessions(req, res, next) {
  getProfessions()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

module.exports = {fetchProfessions, fetchProfessionList};

