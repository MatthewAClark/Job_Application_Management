/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getAllCompanies, getCompanyList, postNewCompany, putCompanyById } = require('../../models/db.companies');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const companies = () => {
  describe('Model testing', () => {
    describe('Companies table', () => {
      it('../models/companies, gets all companies', () => {
        return getAllCompanies()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(4);
            expect(result[0].company_name).to.equal('Devon County Council')
            expect(result[0].industry).to.equal('government')
          })
      })

      it('../models/companies, get company list only', () => {
        return getCompanyList() 
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(4);
            expect(result[0].company_name).to.equal('Devon County Council')
            expect(result[0].industry).to.equal(undefined)
          })
      })

      it('../models/companies, Adds a companies', () => {
        return postNewCompany('Deloitte','Finance','','www.deloitte.com')
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.company_id).to.equal(5);
            expect(result.company_name).to.equal('Deloitte');
          })
      })

      it('../models/companies, Updates a company', () => {
        return putCompanyById(1, 'Cornwall County Council','public authority','government','www.cornwall.gov.uk')
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.company_id).to.equal(1)
          expect(result.company_name).to.equal('Cornwall County Council')
          expect(result.website).to.equal('www.cornwall.gov.uk')
        })
      })





    })

  })
}

module.exports = { companies }




