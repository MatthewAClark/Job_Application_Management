const {postNewJob, getAllJobs} = require('../models/db.advert');

function addNewJob(req, res, next) {
    postNewJob(req.body.organisation_id, req.body.advert_ref, req.body.contract_type, req.body.full_time, req.body.date_posted, req.body.date_applied, req.body.closing_date, req.body.date_seen, req.body.live, req.body.advert_url, req.body.min_salary, req.body.max_salary, req.body.job_title, req.body.job_description, req.body.job_location, req.body.job_field, req.body.agency)
    .then(data =>  res.status(201).send(data))
          .catch(() => next({status: 400, error: 'Unable to add new job'}));
}

function fetchAllJobs(req, res, next) {
    getAllJobs()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewJob, fetchAllJobs};