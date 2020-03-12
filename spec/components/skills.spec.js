/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { postNewSkill, getAllSkills, getListSkills } = require('../../models/db.skills');
const { addSkills } = require('../../controllers/db.skills');
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
            expect(result[3].description_long).to.equal('2 years experience in this too');
          })
      })

      it('../models/contacts, get just the list of skills', () => {
        return getListSkills()
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

  describe('add skill from other components', () => {
    it('Adds a new skill to the database', () => {
      const data = {
        skills: [{
          skill_id: null,
          skill_name: 'Fencing'
        }]
      }

      return addSkills(data)
      .then(result => {
        expect(result.skills).to.be.an('array');
        expect(result.skills[0].skill_id).to.be.an('number')
        expect(result.skills[0].skill_name).to.equal('Fencing')
      })

    })

    it('Does not add a skill if it`s already in the database', () => {
      const data = {
        skills: [{
          skill_id: 1,
          skill_name: 'Customer Service'
        }]
      }

      return addSkills(data)
      .then(result => {
        expect(result.skills).to.be.an('array');
        expect(result.skills[0].skill_id).to.equal(1)
        expect(result.skills[0].skill_name).to.equal('Customer Service')
      })

    })

    it('Adds multiple new skills to the database', () => {
      const data = {
        skills: [{
          skill_id: null,
          skill_name: 'Fencing'
        },{
          skill_id: null,
          skill_name: 'Boxing'
        }]
      }

      return addSkills(data)
      .then(result => {
        expect(result.skills).to.be.an('array');
        expect(result.skills[0].skill_id).to.be.an('number')
        expect(result.skills[0].skill_name).to.equal('Fencing')
        expect(result.skills[1].skill_id).to.be.an('number')
        expect(result.skills[1].skill_name).to.equal('Boxing')
      })

    })

    it('Does not add multiple skills if skills are already in the database', () => {
      const data = {
        skills: [{
          skill_id: 1,
          skill_name: 'Customer Service'
        },{
          skill_id: 2,
          skill_name: 'Teamwork'
        }]
      }

      return addSkills(data)
      .then(result => {
        expect(result.skills).to.be.an('array');
        expect(result.skills[0].skill_id).to.equal(1)
        expect(result.skills[0].skill_name).to.equal('Customer Service')
        expect(result.skills[1].skill_id).to.equal(2)
        expect(result.skills[1].skill_name).to.equal('Teamwork')
      })

    })

    it('Adds a mixture of multiple skills, some in the database some not', () => {
      const data = {
        skills: [{
          skill_id: null,
          skill_name: 'Cricket'
        },{
          skill_id: 2,
          skill_name: 'Teamwork'
        }]
      }

      return addSkills(data)
      .then(result => {
        expect(result.skills).to.be.an('array');
        expect(result.skills[0].skill_id).to.be.an('number')
        expect(result.skills[0].skill_name).to.equal('Cricket')
        expect(result.skills[1].skill_id).to.equal(2)
        expect(result.skills[1].skill_name).to.equal('Teamwork')
      })

    })
  })
}

module.exports = { skill }




