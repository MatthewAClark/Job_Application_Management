/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
// const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components
// const { getAllCompanies, getCompanyList, postNewCompany, putCompanyById } = require('../../models/db.companies');

const { getAllCompanies, getCompanyList, getCompanyById, postNewCompany, putCompanyById } = require('../testdata/companies.data.js')
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const companies = () => {
  describe('Testing the model component for companies', () => {

    it('../models/companies, gets all companies', () => {
      return getAllCompanies()
        .then(companies => {
          getAllCompanies.testresult(companies)
        })
    })

    it('../models/companies, get company list only', () => {
      return getCompanyList()
        .then(companyList => {
          getCompanyList.testresult(companyList)
        })
    })

    it('../models/companies, get company by id', () => {
      const data = getCompanyById.getdata()
      return getCompanyById(data.company_id)
        .then(company => {
          getCompanyById.testresult(company)
        })
    })

    it('../models/companies, Adds a companies', () => {
      const data = postNewCompany.postdata()
      return postNewCompany(data.company_name, data.company_sector, data.industry, data.website)
        .then(newCompany => {
          postNewCompany.testresult(newCompany)
        })
    })

    it('../models/companies, Updates a company', () => {
      const data = putCompanyById.putdata();
      return putCompanyById(data.company_id, data.company_name, data.sector, data.industry, data.website)
        .then(update => {
          putCompanyById.testresult(update)
        })
    })

  })

  describe('Testing the API routes for companies', () => {

    it('.../api/companies, gets all companies', () => {
      return request(app)
      //get request to mock server
      .get('/api/companies')
      .expect(200)    
        .then(companies => {
          getAllCompanies.testresult(companies.body)
        })
    })

    it('../api/companies/list, get company list only', () => {
      return request(app)
      //get request to mock server
      .get('/api/companies/list')
      .expect(200)    
        .then(companyList => {
          getCompanyList.testresult(companyList.body)
        })
    })

    it('.../api/companies, get company by id', () => {
      const data = getCompanyById.getdata()

     return request(app)
      //get request to mock server
      .get(`/api/companies/${data.company_id}`)
      .expect(200)    
        .then(company => {
          getCompanyById.testresult(company.body)
        })
    })

    it('.../api/companies, Adds a companies', () => {
      const data = postNewCompany.postdata()
      return request(app)
      //get request to mock server
      .post('/api/companies')
      .send(data)
      .expect(201)    
        .then(newCompany => {
          postNewCompany.testresult(newCompany.body)
        })
    })

    it('.../api/companies, Updates a company', () => {
      const data = putCompanyById.putdata();
      return request(app)
      //get request to mock server
      .put(`/api/companies/${data.company_id}`)
      .send(data)
      .expect(200)    
        .then(update => {
          putCompanyById.testresult(update.body)
        })
    })

  })
}

module.exports = { companies }




