const {postNewJob, getAllJobs} = require('../models/db.advert');

function addNewJob(req, res, next) {
    postNewJob(req.body.job_title, req.body.occupation_sector, req.body.company_id, req.body.advert_ref, req.body.contract_type, req.body.full_time, req.body.date_posted, req.body.date_seen, req.body.closing_date, req.body.advert_url, req.body.min_salary, req.body.max_salary, req.body.advert_description, req.body.agency, req.body.paid, req.body.job_location)
    .then(data =>  res.status(201).send(data))
          .catch((error) => next({status: 400, error: error}));
}

function fetchAllJobs(req, res, next) {
    getAllJobs()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewJob, fetchAllJobs};

