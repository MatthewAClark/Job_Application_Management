const db = require('../config/index.js');

// comment_id SERIAL PRIMARY KEY,
// position_id int,
// comment_date TIMESTAMP,
// comment VARCHAR(2000),


const postNewComment = (position_id, comment, comment_date) => db.one('INSERT INTO comments (position_id, comment, comment_date) VALUES ($1, $2, $3) RETURNING *', [position_id, comment, comment_date]);  
        
const getAllComments = () => db.manyOrNone('SELECT * FROM comments');

module.exports = {postNewComment, getAllComments};