/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components
// const { getAllCompanies, getCompanyList, postNewCompany, putCompanyById } = require('../../models/db.companies');

const { getAllCompanies, getCompanyList, getCompanyById, postNewCompany, putCompanyById } = require('../testdata/companies.data.js')

const { addCompany } = require('../../controllers/db.companies')
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const companies = () => {
  describe('Get All the data from companies', () => {

    const data = {
      company_id: 1,
      company_name: 'Devon County Council',
      sector: 'public authority',
      industry: 'government',
      index: 0
    }
    it('../models/companies, gets all companies', () => {

      return getAllCompanies()
        .then(companies => {
          getAllCompanies.testresult(companies, data)
        })
    })

    it('.../api/companies, gets all companies', () => {
      return request(app)
        //get request to mock server
        .get('/api/companies')
        .expect(200)
        .then(companies => {
          getAllCompanies.testresult(companies.body, data)
        })
    })
  })

  describe('get only a list of companies', () => {

    const data = {
      company_id: 1,
      company_name: 'Devon County Council',
      index: 0
    }

    it('../models/companies, get company list only', () => {
      return getCompanyList()
        .then(companyList => {
          getCompanyList.testresult(companyList, data)
        })
    })

    it('../api/companies/list, get company list only', () => {
      return request(app)
        //get request to mock server
        .get('/api/companies/list')
        .expect(200)
        .then(companyList => {
          getCompanyList.testresult(companyList.body, data)
        })
    })
  })

  describe('Get company by ID only', () => {
    const data = {
      company_id: 1,
      company_name: 'Devon County Council'
    }
    it('../models/companies, get company by id', () => {
      return getCompanyById(data.company_id)
        .then(company => {
          getCompanyById.testresult(company, data)
        })
    })

    it('.../api/companies, get company by id', () => {

      return request(app)
        //get request to mock server
        .get(`/api/companies/${data.company_id}`)
        .expect(200)
        .then(company => {
          getCompanyById.testresult(company.body, data)
        })
    })
  })

  describe('post a new company to the database', () => {
    data = {
      company_name: 'A N Other company ltd',
      company_sector: 'Another sector',
      industry: 'Another Industry',
      website: 'www.anotherwebsite.com'
    }
    it('../models/companies, Adds a companies', () => {

      return postNewCompany(data.company_name, data.company_sector, data.industry, data.website)
        .then(newCompany => {
          postNewCompany.testresult(newCompany, data)
        })
    })

    it('.../api/companies, Adds a companies', () => {

      return request(app)
        //get request to mock server
        .post('/api/companies')
        .send(data)
        .expect(201)
        .then(newCompany => {
          postNewCompany.testresult(newCompany.body, data)
        })
    })
  })

  describe('Updates company in database', () => {
    const data = {
      company_id: 1,
      company_name: 'Cornwall County Council',
      company_sector: 'government',
      industry: 'Public Authority',
      website: 'www.cornwall.ac.uk'
    }
    it('../models/companies, Updates a company', () => {

      return putCompanyById(data.company_id, data.company_name, data.sector, data.industry, data.website)
        .then(update => {
          putCompanyById.testresult(update, data)
        })
    })

    it('.../api/companies, Updates a company', () => {
      return request(app)
        //get request to mock server
        .put(`/api/companies/${data.company_id}`)
        .send(data)
        .expect(200)
        .then(update => {
          putCompanyById.testresult(update.body, data)
        })
    })
  })

  describe('Adding a company through a new advert or job contract (addCompany)', () => {
    it('/controllers/companies, Adds a new company that does not already exist', () => {
      const postdata = {
        company_id: null,
        company_name: 'A N Other Company Ltd',
        sector: 'government',
        industry: 'public sector',
        website: 'www.another.com'
      }


      const testdata = {
        company_name: 'A N Other Company Ltd',
        sector: 'government',
        industry: 'public sector',
        website: 'www.another.com'
      }

      return addCompany(postdata)
        .then(result => {
          expect(result).to.be.an('object')
          expect(result.company_id).to.be.an('number')
          expect(result.company_name).to.equal(testdata.company_name)

        })
    })

    it('/controllers/occupations, Does NOT add another occupation if it already exists', () => {
      const postdata = {
        company_id: 4,
        company_name: 'Met Office',
        sector: '',
        industry: '',
        website: ''
      }


      const testdata = {
        company_id: 4,
        company_name: 'Met Office',
        sector: '',
        industry: '',
        website: ''
      }

      return addCompany(postdata)
        .then(result => {
          expect(result).to.be.an('object')
          expect(result.company_id).to.equal(testdata.company_id)
          expect(result.company_name).to.equal(testdata.company_name)

        })
    })
  })



}

module.exports = { companies }




