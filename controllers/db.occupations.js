
const { putOccupationById, postNewOccupation, getOccupationList, getOccupations } = require('../models/db.occupations');



function addNewOccupation(req, res, next) {


  postNewOccupation(req.body.occupation, req.body.occupation_profile)
    .then(data => res.status(201).send(data))
    .catch((error) => {
      return next({ status: 400, error: error })
    });
}

function updateOccupationById(req, res, next) {


  putOccupationById(req.params.occupation_id, req.body.occupation, req.body.occupation_profile)
    .then(data => res.status(200).send(data))
    .catch((error) => {
      return next({ status: 400, error: error })
    });
}

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

module.exports = { updateOccupationById, addNewOccupation, fetchOccupations, fetchOccupationList};

