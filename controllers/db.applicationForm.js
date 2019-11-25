const {postNewQuestion, getAllQuestions} = require('../models/db.applicationForm');

// application_id SERIAL PRIMARY KEY,
// position_id int,
// question VARCHAR(1000),
// answer VARCHAR(2000),


function addNewQuestion(req, res, next) {
    postNewQuestion(req.body.position_id, req.body.question, req.body.answer)
    .then(data =>  res.status(201).send(data))
          .catch((error) => {console.log(error)
            return next({status: 400, error: error})});
}

function fetchAllQuestions(req, res, next) {
    getAllQuestions()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewQuestion, fetchAllQuestions};

