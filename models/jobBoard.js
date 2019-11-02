const db = require('../config/index.js');


const getAllJobs = () => {
    console.log(db.manyOrNone('SELECT * FROM board'));
    return db.manyOrNone('SELECT * FROM board');
};

module.exports = { getAllJobs }