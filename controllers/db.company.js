const {postNewCompany, getAllCompanies} = require('../models/db.company');

// company_id SERIAL PRIMARY KEY,
// company_name VARCHAR(20),
// sector VARCHAR(30),
// industry VARCHAR(30),
// company_url VARCHAR(200)


function addNewCompany(req, res, next) {
    postNewCompany(req.body.company_name, req.body.sector, req.body.industry, req.body.company_url)
    .then(data =>  res.status(201).send(data))
          .catch((error) => next({status: 400, error: error}));
}

function fetchAllCompanies(req, res, next) {
    getAllCompanies()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewCompany, fetchAllCompanies};

