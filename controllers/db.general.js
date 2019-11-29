const {getAllLocationsAndCompanies} = require('../models/db.general');




function fetchAllLocationsAndCompanies(req, res, next) {
    getAllLocationsAndCompanies()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { fetchAllLocationsAndCompanies};

