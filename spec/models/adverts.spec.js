/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { postNewAdvert, getAllAdverts, getAllAdvertsWithCompanies, getAdvertById } = require('../../models/db.adverts');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const adverts = () => {
  describe('Model testing', () => {
    describe('advert table', () => {
      it('../models/adverts, gets all adverts', () => {
        return getAllAdverts()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(7);
            expect(result[0].advert_ref).to.equal('REC/19/06732');
          })
      })

      it('../models/adverts, gets all adverts with companies', () => {
        return getAllAdvertsWithCompanies()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(7);
            expect(result[0].advert_ref).to.equal('REC/19/06732');
            expect(result[0].company_name).to.equal('Devon County Council')
          })
      })

      it('../models/adverts, get an advert with all relevant data by id', () => {
        return getAdvertById()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(7);
            expect(result[0].advert_ref).to.equal('REC/19/06732');
            expect(result[0].company_name).to.equal('Devon County Council')
          })
      })

  //     it('../models/addresses, get address by ID', () => {
  //       return getContactById(1) 
  //         .then(result => {
  //           expect(result).to.be.an('array');
  //           expect(result[0].contact_id).to.equal(1)
  //           expect(result[0].contact_name).to.equal('Ray Rimes')
  //         })
  //     })

      //       it('../models/addresses, get live address by company ID', () => {
      //   return getLiveAddressesByCompanyId(2) 
      //     .then(result => {
      //       expect(result).to.be.an('array');
      //       expect(result[0].company_id).to.equal(2)
      //       expect(result[0].postcode).to.equal('EX4 8NS')
      //     })
      // })

      // it('../models/advert, Adds a new advert', () => {
      //   return postNewAdvert(null,1,'ABC123','Semi-perm','part-time','01-13-2018',null,null,'www.w.w.com','','','This is a test',false,'',false,'here',false)
      //     .then(result => {
      //       expect(result).to.be.an('object');
      //       expect(result.advert_id).to.equal(8);
      //        expect(result.advert_description).to.equal('This is a test');
      //     })
      // })

      // it('../models/addresses, Updates an address', () => {
      //   return putAddressById(2, 2, 'First Floor Office\n8 Sandpiper Court\nHarrington Lane\nExeter','EX5 8NS', true)
      //   .then(result => {
      //     expect(result).to.be.an('object');
      //     expect(result.address_id).to.equal(2)
      //     expect(result.address_field).to.equal('First Floor Office\n8 Sandpiper Court\nHarrington Lane\nExeter')
      //     expect(result.postcode).to.equal('EX5 8NS')
      //   })
      // })


    })

  })
}

module.exports = { adverts }




