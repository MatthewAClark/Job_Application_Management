/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getAllApplications, getApplicationById, postNewApplication, putApplicationById } = require('../../models/db.applications');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const applications = () => {
  describe('Model testing', () => {
    describe('applications table', () => {
      it('../models/applications, gets all applications', () => {
        return getAllApplications()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(7);
            expect(result[0].position_id).to.equal(1);
            expect(result[0].company_id).to.equal(1);
          })
      })

      it('../models/applications, get application by ID', () => {
        return getApplicationById(2) 
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.application_id).to.equal(2)
            expect(result.company_id).to.equal(2)
          })
      })



      it('../models/applications, Adds a new application', () => {
        return postNewApplication(1,1,1,1,null,'')
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.application_id).to.equal(8);
             expect(result.company_id).to.equal(1);
            expect(result.advert_id).to.equal(1);
          })
      })

      it('../models/applications, Updates an address', () => {
        return putApplicationById(2, 2, 2, null, 'This is a test')
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.application_id).to.equal(2)
          expect(result.cover_letter).to.equal('This is a test')
        })
      })


    })

  })
}

module.exports = { applications }




