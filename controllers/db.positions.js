const {postNewPosition, getAllPositions} = require('../models/db.positions');

// position_id SERIAL PRIMARY KEY,
// address_id INT,
// contact_id INT,
// job_title VARCHAR(30),
// occupation_sector VARCHAR(50),


function addNewPosition(req, res, next) {
    postNewPosition(req.body.address_id, req.body.contact_id, req.body.job_title, req.body.occupation_sector)
    .then(data =>  res.status(201).send(data))
          .catch((error) => {console.log(error)
            return next({status: 400, error: error})});
}

function fetchAllPositions(req, res, next) {
    getAllPositions()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewPosition, fetchAllPositions};

