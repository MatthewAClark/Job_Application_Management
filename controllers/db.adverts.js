
const { postNewAdvert, getAllAdverts, getLiveAdverts, getAdvertById, putAdvertById} = require('../models/db.adverts');



function addNewAdvert(req, res, next) {

  // Fetch todays date to datestamp entry into database
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  // Add new advert into advert table
  postNewAdvert(req.body.company_name, req.body.job_title, req.body.advert_ref, req.body.contract_type, req.body.full_time_part_time, req.body.date_posted, date, req.body.closing_date, req.body.website, req.body.min_salary, req.body.max_salary, req.body.advert_description, req.body.agency, req.body.job_board, req.body.voluntary, req.body.job_location)
    .then(data => res.status(201).send(data))
    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });
}

function updateAdvertById(req, res, next) {
  putAdvertById(req.params.advert_id, req.body.company_name, req.body.job_title, req.body.advert_ref, req.body.contract_type, req.body.full_time_part_time, req.body.date_posted, req.body.closing_date, req.body.live, req.body.website, req.body.min_salary, req.body.max_salary, req.body.advert_description, req.body.agency, req.body.job_board, req.body.voluntary, req.body.job_location)
    .then(data => {
      res.status(200).send(data)})
    .catch((error) => {
      console.log(error)
      next({ status: 400, error: error })});
}

function fetchAllAdverts(req, res, next) {
  getAllAdverts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchLiveAdverts(req, res, next) {
  getLiveAdverts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchAdvertById(req, res, next) {
  getAdvertById(req.params.advert_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({status: 404, error: error}))
}
 
module.exports = { addNewAdvert, fetchAllAdverts, fetchLiveAdverts, fetchAdvertById, updateAdvertById};

