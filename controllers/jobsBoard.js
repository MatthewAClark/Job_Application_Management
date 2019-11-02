const {getAllJobs} = require('../models/jobBoard');

function fetchAllJobs(req, res, next) {


    getAllJobs()
      .then(data => res.status(200).send(data))
      .catch((e) => next({status: 404, error: e})); 
  
  
  }


  module.exports = {fetchAllJobs};