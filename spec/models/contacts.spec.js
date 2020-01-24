/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { seedNewContact, getAllContacts, getContactById, postNewContact } = require('../../models/db.contacts');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const contacts = () => {
  describe('Model testing', () => {
    describe('contacts table', () => {
      it('../models/contacts, gets all contacts', () => {
        return getAllContacts()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(1);
            expect(result[0].contact_name).to.equal('Ray Rimes');
          })
      })

      it('../models/contacts, get contact by ID', () => {
        return getContactById(1) 
          .then(result => {
            expect(result).to.be.an('array');
            expect(result[0].contact_id).to.equal(1)
            expect(result[0].contact_name).to.equal('Ray Rimes')
          })
      })

      it('../models/contacts, seeds a contact', () => {
        return seedNewContact(3,1,'Fred Flintstone','Miner','Mr Slater',true,null,true)
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.contact_id).to.equal(3)
              expect(result.contact_name).to.equal('Fred Flintstone')
        })
      })

      //       it('../models/addresses, get live address by company ID', () => {
      //   return getLiveAddressesByCompanyId(2) 
      //     .then(result => {
      //       expect(result).to.be.an('array');
      //       expect(result[0].company_id).to.equal(2)
      //       expect(result[0].postcode).to.equal('EX4 8NS')
      //     })
      // })

      it('../models/contacts, Adds a new contact', () => {
        return postNewContact(1,'Wilma Flintstone','House Wife','Fred',true,null)
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.address_id).to.equal(1);
             expect(result.contact_id).to.be.an('number');
            expect(result.contact_name).to.equal('Wilma Flintstone');
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

module.exports = { contacts }




