
const db = require('../config/index.js');



const postNewCorrespondence = (contact_id, address_id, company_id, position_id) => db.one('INSERT INTO correspondence (contact_id, address_id, company_id, position_id) VALUES ($1, $2, $3, $4) RETURNING *', [contact_id, address_id, company_id, position_id]);
    
        
// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN positions ON adverts.position_id=positions.positions_id');

// const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts WHERE advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const putCorrespondenceById = (correspondence_id, contact_id, address_id, company_id) => {
  
    return db.one('UPDATE correspondence SET contact_id=$1, address_id=$2, company_id=$3, WHERE correspondence_id=$4 RETURNING *', [contact_id, address_id, company_id, correspondence_id]);
}
module.exports = {postNewCorrespondence, putCorrespondenceById};