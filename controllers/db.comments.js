const {postNewComment, getAllComments} = require('../models/db.comments');

// comment_id SERIAL PRIMARY KEY,
// position_id int,
// comment_date TIMESTAMP,
// comment VARCHAR(2000),

function addNewComment(req, res, next) {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    postNewComment(req.body.position_id, req.body.comment, date)
    .then(data =>  res.status(201).send(data))
          .catch((error) => {console.log(error)
            next({status: 400, error: error})});
}

function fetchAllComments(req, res, next) {
    getAllComments()
    .then(data => res.status(200).send(data))
      .catch((error) => next({status: 404, error: error})) ;  
}

module.exports = { addNewComment, fetchAllComments};

