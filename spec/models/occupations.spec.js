/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const {seedNewOccupation, getOccupations, getOccupationList, postNewOccupation, putOccupationById } = require('../../models/db.occupations');


 // const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const occupations = () => {
  describe('Occupation table testing', () => {
    describe('Model components', () => {
      it('../models/occupations, gets all occupations', () => {
        return getOccupations()
        .then(result => {
          expect(result).to.be.an('array');
          expect(result.length).to.equal(5);
          expect(result[0].occupation).to.equal('finance')
          expect(result[1].occupation_profile).to.equal('A fine member of the administration team, I would make an excellent candidate')
        })
      })

      it('../models/occupations, Gets just a list of the occupations', () => {
        return getOccupationList()
        .then(result => {
          expect(result).to.be.an('array');
          expect(result.length).to.equal(5);
          expect(result[0].occupation).to.equal('finance')
          expect(result[1].occupation_profile).to.equal(undefined)
        })
      })

      it('../models/occupations, Adds a occupation', () => {
        return postNewOccupation('Accountant', 'A occupational accountant who really, does not want to be a lion tamer')
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.occupation_id).to.equal(6);
            expect(result.occupation).to.equal('Accountant');
          })
      })

      it('../models/occupations, Updates a occupation', () => {
        return putOccupationById(2, 'administration','The best member of the Administration team I could ever be for you. You would be fool not to employ me')
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.occupation_id).to.equal(2)
          expect(result.occupation).to.equal('administration')
          expect(result.occupation_profile).to.equal('The best member of the Administration team I could ever be for you. You would be fool not to employ me')
        })
      })

      it('../models/occupations, seeds an occupation', () => {
        return seedNewOccupation(7,'Electronics Engineer','Developing electronics stuff')
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.occupation_id).to.equal(7)
          expect(result.occupation).to.equal('Electronics Engineer')
          expect(result.occupation_profile).to.equal('Developing electronics stuff')
        })
      })

    
  
  
  
    })

    describe('Routes components', () => {
      it('/api/occupations/list, - fetches list of occupations', () => {
        return request(app)

        .get('/api/occupations/list')
        .expect(200)
        .then(result => {
          
          expect(result.body).to.be.an('array');
          expect(result.body.length).to.equal(5);
          expect(result.body[0].occupation).to.equal('finance')
          expect(result.body[1].occupation_profile).to.equal(undefined)
        })
      })

      it('/api/occupations/, - fetches all occupations', () => {
        return request(app)

        .get('/api/occupations')
        .expect(200)
        .then(result => {
          expect(result.body).to.be.an('array');
          expect(result.body.length).to.equal(5);
          expect(result.body[0].occupation).to.equal('finance')
          expect(result.body[1].occupation_profile).to.equal('A fine member of the administration team, I would make an excellent candidate')
        })
      })

    })

    
  
  })
}

module.exports = {occupations}




