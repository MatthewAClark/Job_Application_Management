/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getProfessions, getProfessionList, postNewProfession, putProfessionById } = require('../../models/db.professions');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const professions = () => {
  describe('Model testing', () => {
    describe('Professions table', () => {
      it('../models/professions, gets all professions', () => {
        return getProfessions()
        .then(result => {
          expect(result).to.be.an('array');
          expect(result.length).to.equal(5);
          expect(result[0].profession).to.equal('finance')
          expect(result[1].profession_profile).to.equal('A fine member of the administration team, I would make an excellent candidate')
        })
      })

      it('../models/professions, Gets just a list of the professions', () => {
        return getProfessionList()
        .then(result => {
          expect(result).to.be.an('array');
          expect(result.length).to.equal(5);
          expect(result[0].profession).to.equal('finance')
          expect(result[1].profession_profile).to.equal(undefined)
        })
      })

      it('../models/professions, Adds a profession', () => {
        return postNewProfession('Accountant', 'A professional accountant who really, does not want to be a lion tamer')
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.profession_id).to.equal(6);
            expect(result.profession).to.equal('Accountant');
          })
      })

      it('../models/professions, Updates a profession', () => {
        return putProfessionById(2, 'administration','The best member of the Administration team I could ever be for you. You would be fool not to employ me')
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.profession_id).to.equal(2)
          expect(result.profession).to.equal('administration')
          expect(result.profession_profile).to.equal('The best member of the Administration team I could ever be for you. You would be fool not to employ me')
        })
      })

    
  
  
  
    })
  
  })
}

module.exports = {professions}




