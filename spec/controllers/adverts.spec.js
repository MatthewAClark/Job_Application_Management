/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { addNewAdvert, addProfession } = require('../../controllers/db.adverts');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const controlleradverts = () => {
  describe('Control testing', () => {
    describe('controller table', () => {
  //     it('../models/addresses, gets all addresses', () => {
  //       return getAllAddresses()
  //         .then(result => {
  //           expect(result).to.be.an('array');
  //           expect(result.length).to.equal(4);
  //           expect(result[0].address_field).to.equal('Great Moor House\\nExeter\\nDevon');
  //           expect(result[0].postcode).to.equal('EX2 7NN');
  //         })
  //     })

  //     it('../models/addresses, get address by ID', () => {
  //       return getAddressById(2) 
  //         .then(result => {
  //           expect(result).to.be.an('object');
  //           expect(result.company_id).to.equal(2)
  //           expect(result.postcode).to.equal('EX4 8NS')
  //         })
  //     })

  //           it('../models/addresses, get live address by company ID', () => {
  //       return getLiveAddressesByCompanyId(2) 
  //         .then(result => {
  //           expect(result).to.be.an('array');
  //           expect(result[0].company_id).to.equal(2)
  //           expect(result[0].postcode).to.equal('EX4 8NS')
  //         })
  //     })

  const body = {

  }

      it('../controllers/profession, Adds a new profession if it is not already defined by id', () => {
        return addProfession({profession_id: null, profession: 'Carpentry'})
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.profession_id).to.equal(6);
             expect(result.profession).to.equal('Carpentry');
          })
      })

      it('../controllers/profession, Does not add a new profession if it already exists as an ID, but passes data back', () => {
        return addProfession({profession_id: 1, profession: 'finance'})
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.profession_id).to.equal(1);
             expect(result.profession).to.equal('finance');
          })
      })

      it('../controllers/profession, should pass back any other data we throw at it besides profession data when adding a new profession', () => {
        return addProfession({profession_id: null, profession: 'Hair Dresser', anotherKey: 'test'})
          .then(result => {
            expect(result).to.be.an('object');
             expect(result.profession).to.equal('Hair Dresser');
             expect(result.anotherKey).to.equal('test');
          })
      })

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

module.exports = { controlleradverts }




