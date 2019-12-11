const {postNewContract, getAllContracts} = require('../models/db.jobContract');
const {postNewPosition} = require('../models/db.positions');

// contract_id SERIAL PRIMARY KEY,
//     position_id INT,
//     address_id INT,
//     contact_id INT,
//     begin_date DATE,
//     end_date DATE,
//     salary VARCHAR(10),
//     live BOOLEAN,
//     job_description VARCHAR(5000),
//     responsibilities VARCHAR(5000),
//     notice_period VARCHAR(10),
//     benifits VARCHAR(2000),
//     contract_type VARCHAR(20),
//     full_time BOOLEAN,
//     paid BOOLEAN,


// Create new contract with new position
function addNewContractAndPosition(req, res, next) {


  // Add new position into position table
  postNewPosition(req.body.address_id, req.body.contact_id, req.body.job_title, req.body.profession_id)
  .then(position => {

    // Add the rest of the job data to the contract table
    return postNewContract(position.position_id, req.body.address_id, req.body.contact_id, req.body.begin_date, req.body.end_date, req.body.salary, req.body.live, req.body.job_description, req.body.responsibilities, req.body.notice_period, req.body.benifits, req.body.contract_type, req.body.full_time, req.body.paid)
    .then(contract => res.status(201).send({position, contract}))
  
  })
  .catch((error) => {console.log(error)
    return next({status: 400, error: error})});
  
}

// function addNewContract(req, res, next) {
//     postNewContract(req.body.position_id, req.body.address_id, req.body.contact_id, req.body.begin_date, req.body.end_date, req.body.salary, req.body.job_description, req.body.responsibilities, req.body.notice_period, req.body.benifits, req.body.contract_type, req.body.full_time, req.body.paid)
//     .then(data =>  res.status(201).send(data))
//           .catch((error) => {
//             console.log(error)
//             return next({status: 400, error: error})});
// }

function fetchAllContracts(req, res, next) {
    getAllContracts()
    .then(data => res.status(200).send(data)) 
      .catch((error) => {
       
        return next({status: 404, error: error})}) ;  
}

module.exports = { addNewContractAndPosition, fetchAllContracts};

