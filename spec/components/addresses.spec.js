/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components

const { getAddressById, getLiveAddressesByCompanyId, getAllAddresses, postNewAddress, putAddressById } = require('../testdata/addresses.data')

const { addAddress } = require('../../controllers/db.addresses')


// const {getAllApplications} = require ('../models/db.applications');

const addresses = () => {
  describe('Model component testing testing', () => {

    const data = {
      index: 0,
      address_id: 1,
      address_field: 'Great Moor House\\nExeter\\nDevon',
      postcode: 'EX2 7NN'
    }
    it('../models/addresses, gets all addresses', () => {
      return getAllAddresses()
        .then(addresses => {
          getAllAddresses.testresult(addresses, data)
        })
    })

    it('../api/addresses, gets all addresses', () => {
      return request(app)
        //get request to mock server
        .get('/api/addresses')
        .expect(200)
        .then(addresses => {
          getAllAddresses.testresult(addresses.body, data)
        })
    })

  })


  describe('GetAddressById', () => {

    const data = {
      company_id: 2,
      address_id: 2,
      address_field: 'Ground Floor Office\\n8 Sandpiper Court\nHarrington Lane\\nExeter',
      postcode: 'EX4 8NS'
    }

    it('../models/addresses, get address by ID', () => {
      return getAddressById(data.address_id)
        .then(address => {
          getAddressById.testresult(address, data)
        })
    })

    it('../api/addresses/:id, get address by ID', () => {
      return request(app)
        //get request to mock server
        .get(`/api/addresses/${data.address_id}`)
        .expect(200)
        .then(address => {
          getAddressById.testresult(address.body, data)
        })
    })

  })

  describe('Get Live Address By ID', () => {

    const data = {
      company_id: 2,
      address_id: 2,
      address_field: 'Ground Floor Office\\n8 Sandpiper Court\nHarrington Lane\\nExeter',
      postcode: 'EX4 8NS',
      index: 0
    }
    it('../models/addresses, get live address by company ID', () => {

      return getLiveAddressesByCompanyId(data.company_id)
        .then(addresses => {
          getLiveAddressesByCompanyId.testresult(addresses, data)
        })
    })

    it('../api/addresses/companies/live, get live address by company ID', () => {

      return request(app)
        //get request to mock server
        .get(`/api/addresses/companies/live/${data.company_id}`)
        .expect(200)
        .then(addresses => {
          getLiveAddressesByCompanyId.testresult(addresses.body, data)
        })
    })

  })

  describe('Add a new address', () => {

    const data = {
      company_id: 1,
      address_field: '1 Flabba Dabba Road\\n Exmouth\\n Devon',
      postcode: 'EX20 4BQ'
    }
    it('../models/address, Adds a new address', () => {

      return postNewAddress(data.company_id, data.address_field, data.postcode)
        .then(address => {
          postNewAddress.testresult(address, data)
        })
    })

    it('../api/address, Adds a new address', () => {

      return request(app)
        //get request to mock server
        .post('/api/addresses/')
        .send(data)
        .expect(201)
        .then(address => {
          postNewAddress.testresult(address.body, data)
        })
    })

  })

  describe('Update address', () => {

    const data = {
      address_id: 2,
      company_id: 2,
      address_field: 'First Floor Office\n8 Sandpiper Court\nHarrington Lane\nExeter',
      postcode: 'EX5 8NS',
      live: true
    }

    it('../models/addresses, Updates an address', () => {

      return putAddressById(data.address_id, data.company_id, data.address_field, data.postcode)
        .then(address => {
          putAddressById.testresult(address, data)
        })
    })

    it('../models/addresses, Updates an address', () => {

      return request(app)
        //get request to mock server
        .put(`/api/addresses/${data.address_id}`)
        .send(data)
        .expect(200)
        .then(address => {
          putAddressById.testresult(address.body, data)
        })
    })
  })

  describe('Adding an address through another component', () => {
    it('Adds an address if it does not exist (address_id = null)', () => {
      const data = {
        address_id: null,
        company_id: 1,
        address_field: '123 another drive, another street, another town, Bedrock',
        postcode: 'EX1 5GF'
      }
      addAddress(data)
        .then(address => {
          expect(address).to.be.an('object')
          expect(address.address_id).to.be.an('number')
          expect(address.address_field).to.equal(data.address_field)
          expect(address.postcode).to.equal(data.postcode)
        })
    })

    it('Does not add an address if it already exists (address_id = number)', () => {
      const data = {
        address_id: 1,
        company_id: 1,
        address_field: 'Great Moor House\nExeter\nDevon',
        postcode: 'EX2 7NN'
      }
      addAddress(data)
        .then(address => {
          expect(address).to.be.an('object')
          expect(address.address_id).to.equal(1)
          expect(address.address_field).to.equal(data.address_field)
          expect(address.postcode).to.equal(data.postcode)
        })
    })
  })

}

module.exports = { addresses }




