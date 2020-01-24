
const db = require('../config/index.js');



const postNewPosition = ( occupation_id) => db.one('INSERT INTO positions (occupation_id) VALUES ($1) RETURNING *', [occupation_id]);

const seedNewPosition = ( position_id, occupation_id) => db.one('INSERT INTO positions (position_id, occupation_id) VALUES ($1, $2) RETURNING *', [position_id, occupation_id]);

const getAllPositions = () => db.manyOrNone('SELECT * FROM positions');
    
        
// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

// const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts WHERE advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const putPositionById = (position_id, occupation_id) => {
    return db.one('UPDATE positions SET occupation_id=$1 WHERE position_id=$2 RETURNING *', [occupation_id, position_id]);
}
module.exports = {seedNewPosition, getAllPositions, postNewPosition, putPositionById};