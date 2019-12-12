
const {postNewAdvert, getAllAdverts, getLiveAdverts} = require('../models/db.adverts');



function addNewAdvert(req, res, next) {

  // Fetch todays date to datestamp entry into database
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  // Add new position into position table
  postNewPosition(req.body.address_id, req.body.contact_id, req.body.job_title, req.body.profession_id)

 
  .catch((error) => {console.log(error)
    return next({status: 400, error: error})});
  
}

function fetchAllAdverts(req, res, next) {
    getAllAdverts()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

function fetchLiveAdverts(req, res, next) {
  getLiveAdverts()
  .then(data => res.status(200).send(data))
    .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewAdvert, fetchAllAdverts, fetchLiveAdverts};

