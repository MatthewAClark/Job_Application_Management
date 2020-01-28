/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
// const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components

const { getAddressById, getLiveAddressesByCompanyId, getAllAddresses, postNewAddress, putAddressById } = require('../testdata/addresses.data')
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const addresses = () => {
  describe('Model component testing testing', () => {

    it('../models/addresses, gets all addresses', () => {
      return getAllAddresses()
        .then(addresses => {
          getAllAddresses.testresult(addresses)
        })
    })

    it('../models/addresses, get address by ID', () => {
      const data = getAddressById.getdata()
      return getAddressById(data.address_id)
        .then(address => {
          getAddressById.testresult(address)
        })
    })

    it('../models/addresses, get live address by company ID', () => {
      const data = getLiveAddressesByCompanyId.getdata()
      return getLiveAddressesByCompanyId(data.company_id)
        .then(addresses => {
          getLiveAddressesByCompanyId.testresult(addresses)
        })
    })

    it('../models/address, Adds a new address', () => {
      const data = postNewAddress.postdata()
      return postNewAddress(data.company_id, data.address_field, data.postcode)
        .then(address => {
          postNewAddress.testresult(address)
        })
    })

    it('../models/addresses, Updates an address', () => {
      const data = putAddressById.putdata()
      return putAddressById(data.address_id, data.company_id, data.address_field, data.postcode)
        .then(address => {
          putAddressById.testresult(address)
        })
    })
  })

  describe('API route testing', () => {

    it('../api/addresses, gets all addresses', () => {
      return request(app)
      //get request to mock server
      .get('/api/addresses')
      .expect(200)  
        .then(addresses => {
          getAllAddresses.testresult(addresses.body)
        })
    })

    it('../api/addresses/:id, get address by ID', () => {
      const data = getAddressById.getdata()
      return request(app)
      //get request to mock server
      .get(`/api/addresses/${data.address_id}`)
      .expect(200)  
        .then(address => {
          getAddressById.testresult(address.body)
        })
    })

    it('../api/addresses/companies/live, get live address by company ID', () => {
      const data = getLiveAddressesByCompanyId.getdata()
      return request(app)
      //get request to mock server
      .get(`/api/addresses/companies/live/${data.company_id}`)
      .expect(200)  
        .then(addresses => {
          getLiveAddressesByCompanyId.testresult(addresses.body)
        })
    })

    it('../api/address, Adds a new address', () => {
      const data = postNewAddress.postdata()
      return request(app)
      //get request to mock server
      .post('/api/addresses/')
      .send(data)
      .expect(201)  
        .then(address => {
          postNewAddress.testresult(address.body)
        })
    })

    it('../models/addresses, Updates an address', () => {
      const data = putAddressById.putdata()
      return request(app)
      //get request to mock server
      .put(`/api/addresses/${data.address_id}`)
      .send(data)
      .expect(200)  
        .then(address => {
          putAddressById.testresult(address.body)
        })
    })
  })
}

module.exports = { addresses }




