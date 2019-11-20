const db = require('../config/index.js');

// contract_id SERIAL PRIMARY KEY,
// position_id INT,
// address_id INT,
// contact_id INT,
// begin_date DATE,
// end_date DATE,
// salary VARCHAR(10),
// live BOOLEAN,
// job_description VARCHAR(5000),
// responsibilities VARCHAR(5000),
// notice_period VARCHAR(10),
// benifits VARCHAR(2000),
// contract_type VARCHAR(20),
// full_time BOOLEAN,
// paid BOOLEAN,



const postNewContract = (position_id, address_id, contact_id, begin_date, end_date, salary, live, job_description, responsibilities, notice_period, benifits, contact_type, full_time, paid) => db.one('INSERT INTO job_contract (position_id, address_id, contact_id, begin_date, end_date, salary, live, job_description, responsibilities, notice_period, benifits, contact_type, full_time, paid) VALUES ($1, $2) RETURNING *', [position_id, address_id, contact_id, begin_date, end_date, salary, live, job_description, responsibilities, notice_period, benifits, contact_type, full_time, paid]);
    
        
const getAllContracts = () => db.manyOrNone('SELECT * FROM job_contracts');

module.exports = {postNewContract, getAllContracts};