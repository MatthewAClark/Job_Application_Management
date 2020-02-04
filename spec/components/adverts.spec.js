/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getAllAdverts, getLiveAdverts, getAdvertById, getAllAdvertContacts, postNewAdvert, putAdvertById, postAdvertContact } = require('../testdata/adverts.data');
const { addAdvertContacts } = require('../../controllers/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const adverts = () => {

  describe('Get All adverts', () => {

    const data = {
      length: 7,
      index: 0,
      advert_ref: 'REC/19/06732',
      company_name: 'Devon County Council'
    }
    it('../models/adverts, gets all adverts', () => {
      return getAllAdverts()
        .then(result => {
          getAllAdverts.testresult(result, data)
        })
    })
  })

  describe('Get All Live Adverts', () => {

    const data = {
      length: 6,
      index: 0,
      advert_ref: 'REC/19/06732',
      company_name: 'Devon County Council'
    }

    it('../models/adverts, gets all live adverts', () => {
      return getLiveAdverts()
        .then(result => {
          getLiveAdverts.testresult(result, data)
        })
    })
  })

  describe('Get Advert by Id', () => {

    const data = {
      advert_id: 1,
      advert_ref: 'REC/19/06732',
      company_name: 'Devon County Council'
    }
    it('../models/adverts, gets advert by id', () => {

      return getAdvertById(data.advert_id)
        .then(result => {
          getAdvertById.testresult(result, data)
        })
    })

  })

  describe('get all advert contacts by advert id', () => {


    it('../models/adverts, ', () => {

      const data = {
        advert_id: 1,
        index: 0,
        length: 1,
        contact_id: 1,
        contact_name: 'Ray Rimes'
      }

      return getAllAdvertContacts(data.advert_id)
        .then(result => {
          getAllAdvertContacts.testresult(result, data)
        })
    })

  })

  describe('Adds a new advert', () => {

    const data = {
      occupation_id: 1,
      company_id: 1,
      address_id: 1,
      position_title: 'Admin Engineer',
      advert_ref: 'ABC123',
      contract_type: 'Semi-perm',
      contract_hours: 'part-time',
      date_posted: '01-13-2018',
      date_seen: null,
      closing_date: null,
      advert_url: 'www.w.w.com',
      min_salary: '',
      max_salary: '',
      advert_description: 'This is a test',
      agency: false,
      job_board: '',
      voluntary: false,
      job_location: 'here'
    }
    it('../models/advert, ', () => {
      return postNewAdvert(
        data.occupation_id,
        data.company_id,
        data.address_id,
        data.position_title,
        data.advert_ref,
        data.contract_type,
        data.contract_hours,
        data.date_posted,
        data.date_seen,
        data.closing_date,
        data.advert_url,
        data.min_salary,
        data.max_salary,
        data.advert_description,
        data.agency,
        data.job_board,
        data.voluntary,
        data.job_location
      )
        .then(result => {
          postNewAdvert.testresult(result, data)
        })
    })
  })

  describe('updates an advert', () => {

    const data = {
      advert_id: 2,
      occupation_id: 2,
      company_id: 2,
      address_id: 2,
      position_title: 'Office Senior Administrator',
      advert_ref: '456123',
      contract_type: '',
      contract_hours: '',
      date_posted: null,
      date_seen: null,
      closing_date: null,
      live: false,
      advert_url: '',
      min_salary: '',
      max_salary: '',
      advert_description: '',
      agency: false,
      job_board: '',
      voluntary: false,
      job_location: ''
    }

    it('../models/advert,', () => {

      return putAdvertById(
        data.advert_id,
        data.occupation_id,
        data.company_id,
        data.address_id,
        data.position_title,
        data.advert_ref,
        data.contract_type,
        data.contract_hours,
        data.date_posted,
        data.date_seen,
        data.closing_date,
        data.live,
        data.advert_url,
        data.min_salary,
        data.max_salary,
        data.advert_description,
        data.agency,
        data.job_board,
        data.voluntary,
        data.job_location
      )
        .then(result => {
          putAdvertById.testresult(result, data)
        })
    })
  })

  describe('posts advert contacts', () => {

    const data = {
      advert_id: 2,
      contact_id: 1
    }

    it('../models/advert,', () => {

      return postAdvertContact(
        data.advert_id,
        data.contact_id
      )
        .then(result => {
          postAdvertContact.testresult(result, data)
        })
    })
  })

  describe.only('posts advert contacts', () => {

    it.only('../controllers/adverts adds contacts', () => {

      // return request(app)
      //get request to mock server
      // .post('/api/adverts/')
      // .send({contact_id: 1, advert_id:2})
      // .expect(201)

      addAdvertContacts({ advert_id: 2, contacts: [{ contact_id: 1, contact_name: 'Barny' }] })
        .then(result => {
          expect(result).to.be.an('object')
          expect(result.advert_id).to.equal(2)
          expect(result.contacts[0].contact_id).to.equal(1)
          expect(result.contacts[0].contact_name).to.equal('Barny')
          expect(result.contacts[0].advert_contact_id).to.be.an('number')

        })

    })
  })

  // We want the advert controller to add all relevant data regarding the advert to the db. This includes occupation, company, address and contacts. We only want it to add a new one of any of these if the data does not already exist in the db.
  describe.only('controller advert test', () => {
    const data = {
      occupation: 'Software Development',
      occupation_id: 5,
      company_name: 'Devon County Council',
      company_id: 1,
      address_field: 'Great Moor House\nExeter\nDevon',
      postcode: 'EX2 7NN',
      address_id: 1,
      position_title: 'Software Test Engineer',
      contacts: [{ contact_id: 1, company_id: 1, address_id: 1, contact_name: 'Ray Rimes', contact_methods: [{method_id: 1, contact_method: 'Email', contact_value: 'test@testing.com'},{method_id: 2, contact_method: 'Telephone', contact_value: '0123456789'}] }],
      advert_ref: 'abc123',
      contract_type: 'permanent',
      contract_hours: 'full-time',
      date_posted: null,
      date_seen: null,
      closing_date: null,
      live: true,
      advert_url: 'www.adverts.com',
      min_salary: '£33,000',
      max_salary: '£36,000',
      advert_description: 'Testing software I would imagine',
      agency: false,
      job_board: '',
      voluntary: false,
      job_location: 'Exeter'
    }
    it('../controllers/adverts adds advert with same occupation, company returning original data', () => {

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(data)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.occupation_id).to.equal(5)
          expect(result.body.occupation).to.equal('Software Development')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts, adds new occupation when required in table', () => {
      const testData = {
        ...data,
        occupation: 'Data Analysis',
        occupation_id: null,

      }
      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(testData)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.occupation_id).to.equal(6)
          expect(result.body.occupation).to.equal('Data Analysis')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds advert with same company, returning original data', () => {

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(data)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.company_id).to.equal(1)
          expect(result.body.company_name).to.equal('Devon County Council')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds advert with different occupation, new company data along with all other data', () => {
      const testData = { ...data, company_id: null, company_name: 'Matts Software Ltd' }
      return request(app)
        //get request to mock server

        .post('/api/adverts/')
        .send(testData)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.company_id).to.equal(5)
          expect(result.body.company_name).to.equal('Matts Software Ltd')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds advert with same address, returning original data', () => {

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(data)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.address_id).to.equal(1)
          expect(result.body.address_field).to.equal('Great Moor House\nExeter\nDevon')
          expect(result.body.postcode).to.equal('EX2 7NN')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds advert with new address, returning original data', () => {
      const testData = { ...data, address_id: null, address_field: '123 Testerton Way, testfield', postcode: 'TE1 1ST' }
      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(testData)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.address_id).to.equal(5)
          expect(result.body.address_field).to.equal('123 Testerton Way, testfield')
          expect(result.body.postcode).to.equal('TE1 1ST')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds advert with same contacts, returning original data', () => {

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(data)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.contacts).to.be.an('array')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.contacts[0].contact_id).to.equal(1)
          expect(result.body.contacts[0].contact_name).to.equal('Ray Rimes')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds advert with new contacts, returning original data', () => {
      const contacts = [{ contact_id: null, contact_name: 'Fred Flintstone', contact_methods: [] }]
      const testData = { ...data, contacts }

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(testData)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.contacts).to.be.an('array')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.contacts[0].contact_id).to.equal(2)
          expect(result.body.contacts[0].contact_name).to.equal('Fred Flintstone')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds advert with new contacts with existing, returning original data', () => {
      const contacts = [...data.contacts, { contact_id: null, contact_name: 'Fred Flintstone', contact_methods: [] }]
      const testData = { ...data, contacts }

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(testData)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.contacts).to.be.an('array')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.contacts[0].contact_id).to.equal(1)
          expect(result.body.contacts[0].contact_name).to.equal('Ray Rimes')
          expect(result.body.contacts[1].contact_id).to.be.an('number')
          expect(result.body.contacts[1].contact_name).to.equal('Fred Flintstone')
          expect(result.body.advert_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds advert_contact record for each advert\'s contact added', () => {
      const contacts = [...data.contacts, { contact_id: null, contact_name: 'Fred Flintstone', contact_methods: [] }]
      const testData = { ...data, contacts }

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(testData)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.contacts).to.be.an('array')
          expect(result.body.advert_ref).to.equal('abc123')
          expect(result.body.contacts[0].advert_contact_id).to.be.an('number')
          expect(result.body.contacts[1].advert_contact_id).to.be.an('number')
        })

    })

    it('../controllers/adverts adds contact methods', () => {
      // const contacts = [...data.contacts, { contact_id: null, contact_name: 'Fred Flintstone', contact_methods: [] }]
      // const testData = { ...data, contacts }

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(data)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.contacts).to.be.an('array')
          expect(result.body.contacts[0].contact_methods).to.be.an('array')
          expect(result.body.contacts[0].contact_methods[0].method_id).to.equal(1)
          expect(result.body.contacts[0].contact_methods[0].contact_value).to.equal('test@testing.com')
          expect(result.body.contacts[0].contact_methods[1].method_id).to.equal(2)
          expect(result.body.contacts[0].contact_methods[1].contact_value).to.equal('0123456789')
        })

    })

    it('../controllers/adverts adds contact methods', () => {
      const contacts = [...data.contacts, { contact_id: null, contact_name: 'Fred Flintstone', contact_methods: [{method_id: null, contact_method: 'Email', contact_value: 'fred@flintstones.bedrock.com'}] }]
      contacts[0].contact_methods.push({method_id: null, contact_method: 'fax', contact_value: '987654321'})
      const testData = { ...data, contacts }

      return request(app)
        //get request to mock server
        .post('/api/adverts/')
        .send(testData)
        .expect(201)
        .then(result => {
          expect(result.body).to.be.an('object')
          expect(result.body.contacts).to.be.an('array')
          expect(result.body.contacts[0].contact_methods).to.be.an('array')
          expect(result.body.contacts[0].contact_methods.length).to.equal(3)
          expect(result.body.contacts[0].contact_methods[0].method_id).to.equal(1)
          expect(result.body.contacts[0].contact_methods[0].contact_value).to.equal('test@testing.com')
          expect(result.body.contacts[0].contact_methods[1].method_id).to.equal(2)
          expect(result.body.contacts[0].contact_methods[1].contact_value).to.equal('0123456789')
          expect(result.body.contacts[0].contact_methods[2].method_id).to.be.an('number')
          expect(result.body.contacts[0].contact_methods[2].contact_value).to.equal('987654321')
          expect(result.body.contacts[1].contact_methods[0].method_id).to.be.an('number')
          expect(result.body.contacts[1].contact_methods[0].contact_value).to.equal('fred@flintstones.bedrock.com')
        })

    })
  })



}

module.exports = { adverts }




