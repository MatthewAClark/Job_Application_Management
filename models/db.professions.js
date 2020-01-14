
const db = require('../config/index.js');



const postNewProfession = ( profession, profession_profile) => db.one('INSERT INTO professions (profession, profession_profile) VALUES ($1, $2) RETURNING *', [profession, profession_profile]);
    
        
// const getAllAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id');

// const getAdvertById = (advert_id) => db.oneOrNone('SELECT * FROM adverts WHERE advert_id=$1', [advert_id]);

// const getLiveAdverts = () => db.manyOrNone('SELECT * FROM adverts FULL JOIN companies ON adverts.company_id=companies.company_id WHERE adverts.live=true');

const putProfessionById = (profession_id, profession, profession_profile) => {
    return db.one('UPDATE professions SET profession=$1, profession_profile=$2 WHERE profession_id=$3 RETURNING *', [profession, profession_profile, profession_id]);
}

const getProfessions = () => db.manyOrNone('SELECT * FROM professions');

const getProfessionList = () => db.manyOrNone('SELECT profession_id, profession FROM professions')
module.exports = {postNewProfession, getProfessionList, putProfessionById, getProfessions};