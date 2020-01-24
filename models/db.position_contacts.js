
const db = require('../config/index.js');



const postNewPosition_contact = (contact_id, position_id) => db.one('INSERT INTO position_contacts (contact_id, position_id) VALUES ($1, $2) RETURNING *', [contact_id, position_id]);

const seedNewPosition_contact = (position_contact_id, contact_id, position_id) => db.one('INSERT INTO position_contacts (position_contact_id, contact_id, position_id) VALUES ($1, $2, $3) RETURNING *', [position_contact_id, contact_id, position_id]);
    
        
const getAllPosition_contacts = () => db.manyOrNone('SELECT * FROM position_contacts');

// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN positions ON adverts.position_id=positions.positions_id');

// const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts WHERE advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const putPosition_contactById = (position_contact_id, contact_id, address_id, company_id) => {
  
    return db.one('UPDATE position_contacts SET contact_id=$1, address_id=$2, company_id=$3 WHERE position_contact_id=$4 RETURNING *', [contact_id, position_contact_id]);
}
module.exports = {seedNewPosition_contact, postNewPosition_contact, putPosition_contactById, getAllPosition_contacts};