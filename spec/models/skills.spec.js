/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { postNewSkill, getAllSkills } = require('../../models/db.skills');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const skill = () => {
  describe('Model testing', () => {
    describe('skill table', () => {
      it('../models/contacts, gets all contacts', () => {
        return getAllSkills()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(5);
            expect(result[0].skill_name).to.equal('Customer Service');
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

      it('../models/skills, Adds a new skill', () => {
        return postNewSkill('Pottery','Long description of pottery','short description of pottery')
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.skill_id).to.equal(6);
             expect(result.skill_name).to.equal('Pottery');
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

module.exports = { skill }




