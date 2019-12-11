
const {postNewAdvert, getAllAdverts} = require('../models/db.advert');

const {postNewPosition} = require('../models/db.positions');

// advert_id SERIAL PRIMARY KEY,
//     position_id INT,
//     address_id INT,
//     contact_id INT,
//     advert_ref VARCHAR(10),
//     contract_type VARCHAR(10),
//     full_time BOOLEAN,
//     date_posted DATE,
//     date_applied DATE,
//     closing_date DATE,
//     date_seen TIMESTAMP,
//     live BOOLEAN,
//     advert_url VARCHAR(200),
//     min_salary VARCHAR(10),
//     max_salary VARCHAR(10),
//     advert_description VARCHAR(8000),
//     agency BOOLEAN,
//     job_board VARCHAR(20),
//     paid BOOLEAN,
//     FOREIGN KEY (position_id) REFERENCES position(position_id),
//     FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
//     FOREIGN KEY (address_id) REFERENCES addresses(address_id)

function addNewAdvert(req, res, next) {

  // Fetch todays date to datestamp entry into database
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  // Add new position into position table
  postNewPosition(req.body.address_id, req.body.contact_id, req.body.job_title, req.body.profession_id)
  .then(position => {

    // Add the rest of the advert data to the advert table
    return postNewAdvert(position.position_id, req.body.address_id, req.body.contact_id, req.body.advert_ref, req.body.contract_type, req.body.full_time, req.body.date_posted, req.body.date_applied, req.body.closing_date, date, req.body.advert_url, req.body.min_salary, req.body.max_salary, req.body.advert_description, req.body.agency, req.body.job_board, req.body.paid)
    .then(advert => res.status(201).send({position, advert}))
  
  })
  .catch((error) => {console.log(error)
    return next({status: 400, error: error})});
  
}

function fetchAllAdverts(req, res, next) {
    getAllAdverts()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewAdvert, fetchAllAdverts};

