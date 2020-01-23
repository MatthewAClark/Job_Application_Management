
const db = require('../config/index.js');



const postNewOccupation = ( occupation, occupation_profile) => db.one('INSERT INTO occupations (occupation, occupation_profile) VALUES ($1, $2) RETURNING *', [occupation, occupation_profile]);

const seedNewOccupation = ( occupation_id, occupation, occupation_profile) => db.one('INSERT INTO occupations (occupation_id, occupation, occupation_profile) VALUES ($1, $2, $3) RETURNING *', [occupation_id, occupation, occupation_profile]);
    
        
// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

// const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts WHERE advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const putOccupationById = (occupation_id, occupation, occupation_profile) => {
    return db.one('UPDATE occupations SET occupation=$1, occupation_profile=$2 WHERE occupation_id=$3 RETURNING *', [occupation, occupation_profile, occupation_id]);
}

const getOccupations = () => db.manyOrNone('SELECT * FROM occupations');

const getOccupationList = () => db.manyOrNone('SELECT occupation_id, occupation FROM occupations')
module.exports = {seedNewOccupation, postNewOccupation, getOccupationList, putOccupationById, getOccupations};