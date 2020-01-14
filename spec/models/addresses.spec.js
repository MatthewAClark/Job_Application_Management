/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { postNewAddress, getLiveAddressesByCompanyId, getAllAddresses, getAddressById, putAddressById } = require('../../models/db.addresses');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const addresses = () => {
  describe('Model testing', () => {
    describe('addresses table', () => {
      it('../models/addresses, gets all addresses', () => {
        return getAllAddresses()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(4);
            expect(result[0].address_field).to.equal('Great Moor House\\nExeter\\nDevon');
            expect(result[0].postcode).to.equal('EX2 7NN');
          })
      })

      it('../models/addresses, get address by ID', () => {
        return getAddressById(2) 
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.company_id).to.equal(2)
            expect(result.postcode).to.equal('EX4 8NS')
          })
      })

            it('../models/addresses, get live address by company ID', () => {
        return getLiveAddressesByCompanyId(2) 
          .then(result => {
            expect(result).to.be.an('array');
            expect(result[0].company_id).to.equal(2)
            expect(result[0].postcode).to.equal('EX4 8NS')
          })
      })

      it('../models/address, Adds a new address', () => {
        return postNewAddress(1,'1 Flabba Dabba Road\\n Exmouth\\n Devon','EX20 4BQ')
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.address_id).to.equal(5);
             expect(result.company_id).to.equal(1);
            expect(result.address_field).to.equal('1 Flabba Dabba Road\\n Exmouth\\n Devon');
          })
      })

      it('../models/addresses, Updates an address', () => {
        return putAddressById(2, 2, 'First Floor Office\n8 Sandpiper Court\nHarrington Lane\nExeter','EX5 8NS', true)
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.address_id).to.equal(2)
          expect(result.address_field).to.equal('First Floor Office\n8 Sandpiper Court\nHarrington Lane\nExeter')
          expect(result.postcode).to.equal('EX5 8NS')
        })
      })


    })

  })
}

module.exports = { addresses }




