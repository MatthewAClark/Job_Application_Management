/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const {getContactMethodsById, getAllContactMethods, seedNewContact, getAllContacts, getContactById, postNewContact, postContactMethod } = require('../../models/db.contacts');
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

      

      it('../models/contacts, Adds a new contact', () => {
        return postNewContact(1,'Wilma Flintstone','House Wife','Fred',true,null)
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.address_id).to.equal(1);
             expect(result.contact_id).to.be.an('number');
            expect(result.contact_name).to.equal('Wilma Flintstone');
          })
      })

    


    })

    describe.only('contact_methods table', () => {
      it('../models/contact_methods, gets all contact_methods', () => {
        return getAllContactMethods()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(2);
            expect(result[0].contact_method).to.equal('Email');
          })
      })

      it('../models/contact_methods, gets contact_methods by id', () => {
        return getContactMethodsById(1)
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(2);
            expect(result[0].contact_method).to.equal('Email');
          })
      })

      it('../models/contact_methods, posts a new contact_method by id', () => {
        return postContactMethod(1, 'fax','0123456789')
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.method_id).to.equal(3);
            expect(result.contact_method).to.equal('fax');
          })
      })



      // it('../models/contacts, get contact by ID', () => {
      //   return getContactById(1) 
      //     .then(result => {
      //       expect(result).to.be.an('array');
      //       expect(result[0].contact_id).to.equal(1)
      //       expect(result[0].contact_name).to.equal('Ray Rimes')
      //     })
      // })

      // it('../models/contacts, seeds a contact', () => {
      //   return seedNewContact(3,1,'Fred Flintstone','Miner','Mr Slater',true,null,true)
      //   .then(result => {
      //     expect(result).to.be.an('object');
      //     expect(result.contact_id).to.equal(3)
      //         expect(result.contact_name).to.equal('Fred Flintstone')
      //   })
      // })

      

      // it('../models/contacts, Adds a new contact', () => {
      //   return postNewContact(1,'Wilma Flintstone','House Wife','Fred',true,null)
      //     .then(result => {
      //       expect(result).to.be.an('object');
      //       expect(result.address_id).to.equal(1);
      //        expect(result.contact_id).to.be.an('number');
      //       expect(result.contact_name).to.equal('Wilma Flintstone');
      //     })
      // })

    


    })

  })
}

module.exports = { contacts }




