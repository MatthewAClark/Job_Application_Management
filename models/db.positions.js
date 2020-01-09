
const db = require('../config/index.js');



const postNewPosition = ( profession_id, position_title) => db.one('INSERT INTO positions (profession_id, position_title) VALUES ($1, $2) RETURNING *', [profession_id, position_title]);
    
        
// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

// const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts WHERE advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const putPositionById = (position_id, profession_id, position_title) => {
    return db.one('UPDATE positions SET profession_id=$1, position_title=$2, WHERE position_id=$3 RETURNING *', [profession_id, position_title, position_id]);
}
module.exports = {postNewPosition, putPositionById};