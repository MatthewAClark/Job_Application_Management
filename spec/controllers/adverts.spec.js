/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components
const { addContactValue, addProfession, addCompany, addAddress, addContact, addCorrespondence, addPosition, addAdvert } = require('../../controllers/db.adverts');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const controlleradverts = () => {
  describe('Control testing', () => {
    describe('controller table', () => {
      //     it('../models/addresses, gets all addresses', () => {
      //       return getAllAddresses()
      //         .then(result => {
      //           expect(result).to.be.an('array');
      //           expect(result.length).to.equal(4);
      //           expect(result[0].address_field).to.equal('Great Moor House\\nExeter\\nDevon');
      //           expect(result[0].postcode).to.equal('EX2 7NN');
      //         })
      //     })

      //     it('../models/addresses, get address by ID', () => {
      //       return getAddressById(2) 
      //         .then(result => {
      //           expect(result).to.be.an('object');
      //           expect(result.company_id).to.equal(2)
      //           expect(result.postcode).to.equal('EX4 8NS')
      //         })
      //     })

      //           it('../models/addresses, get live address by company ID', () => {
      //       return getLiveAddressesByCompanyId(2) 
      //         .then(result => {
      //           expect(result).to.be.an('array');
      //           expect(result[0].company_id).to.equal(2)
      //           expect(result[0].postcode).to.equal('EX4 8NS')
      //         })
      //     })

      const body = {

      }

      // Data not relevant to profession should be passed back. We substitute this with a dummy key 'anotherKey'
      describe('profession', () => {
        it('../controllers/adverts, Adds a new profession if it is not already defined by id, and passes all data back', () => {
          return addProfession({ profession_id: null, profession: 'Carpentry', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.profession_id).to.equal(6);
              expect(result.profession).to.equal('Carpentry');
              expect(result.anotherKey).to.equal('test');
            })
        })

        it('../controllers/adverts, Does not add a new profession if it already exists as an ID, but passes data back', () => {
          return addProfession({ profession_id: 1, profession: 'finance', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.profession_id).to.equal(1);
              expect(result.profession).to.equal('finance');
              expect(result.anotherKey).to.equal('test');
            })
        })
      })


      describe('company', () => {
        //// Company
        it('../controllers/adverts, Adds a new company if it is not already defined by id, and passes all data back', () => {
          return addCompany({ company_id: null, company_name: 'A nother company Ltd', sector: 'manufacturing', industry: 'carpentry', website: 'www.carpentrything.org', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.company_id).to.equal(5);
              expect(result.company_name).to.equal('A nother company Ltd');
              expect(result.sector).to.equal('manufacturing');
              expect(result.industry).to.equal('carpentry');
              expect(result.website).to.equal('www.carpentrything.org');
              expect(result.anotherKey).to.equal('test')
            })
        })

        it('../controllers/adverts, Adds a new company if it is not already defined by id, and passes all data back', () => {
          return addCompany({ company_id: 1, company_name: 'Devon County Council', sector: 'manufacturing', industry: 'carpentry', website: 'www.carpentrything.org', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.company_id).to.equal(1);
              expect(result.company_name).to.equal('Devon County Council');
              expect(result.anotherKey).to.equal('test')
            })
        })

      })

      describe('address', () => {
        //// Company
        it('../controllers/adverts, Adds a new address if it is not already defined by id, and passes all data back', () => {
          return addAddress({ address_id: null, address_field: '62 West Wallaby Street', postcode: 'WA1 5RO', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.address_id).to.equal(5);
              expect(result.address_field).to.equal('62 West Wallaby Street');
              expect(result.postcode).to.equal('WA1 5RO');
              expect(result.anotherKey).to.equal('test')
            })
        })

        it('../controllers/adverts, Adds a new address if it is not already defined by id, and passes all data back', () => {
          return addAddress({ address_id: 1, address_field: 'Great Moor House', postcode: 'EX2 7NN', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.address_id).to.equal(1);
              expect(result.postcode).to.equal('EX2 7NN');
              expect(result.anotherKey).to.equal('test')
            })
        })

      })

      describe('contacts', () => {
        //// Contacts
        it('../controllers/adverts, Adds a new contact if it is not already defined by id, and passes all data back', () => {
          return addContact({ contact_id: null, contact_values: [], company_id: 1, address_id: 1, contact_name: 'Wilma Flintstone', contact_position: 'House Wife', capacity_known: 'Fred', reference: true, data_known: null, anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.contact_id).to.equal(2);
              expect(result.contact_name).to.equal('Wilma Flintstone');
              expect(result.anotherKey).to.equal('test')
            })
        })

        it('../controllers/adverts, Does not add a contact if it already exists through contact_id', () => {
          return addContact({ contact_id: 1, company_id: 1, address_id: 1, contact_name: 'Ray Rimes', contact_position: '', capacity_known: '', reference: false, data_known: null, anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.contact_id).to.equal(1);
              expect(result.contact_name).to.equal('Ray Rimes');
              expect(result.anotherKey).to.equal('test')
            })
        })

      })

      describe('correspondence', () => {
        //// Contacts
        it('../controllers/adverts, Adds a new correspondence if it is not already defined by id, and passes all data back', () => {
          return addCorrespondence({ contact_id: 1, company_id: 1, address_id: 1, position_id: 1, anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.correspondence_id).to.equal(8)
              expect(result.contact_id).to.equal(1);
              expect(result.address_id).to.equal(1);
              expect(result.company_id).to.equal(1);
              expect(result.position_id).to.equal(1);
              expect(result.anotherKey).to.equal('test')
            })
        })



      })

      describe('position', () => {
        //// position
        it('../controllers/adverts, Adds a new position', () => {
          return addPosition({ profession_id: 1, position_title: 'Bank Robber', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.position_id).to.equal(8)
              expect(result.profession_id).to.equal(1);
              expect(result.position_title).to.equal('Bank Robber');
              expect(result.anotherKey).to.equal('test')
            })
        })



      })

      describe('contact value', () => {
        //// advert
        it('../controllers/adverts, Adds a new contact value', () => {
          return addContactValue({ value_id: null, contact_id: 1, contact_type: 'email', contact_value: 'another@email.com', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.value_id).to.equal(3)
              expect(result.contact_type).to.equal('email');
              expect(result.contact_value).to.equal('another@email.com')
              expect(result.anotherKey).to.equal('test')
            })
        })

        it('../controllers/adverts, Does not add a new contact value if the value id is not null', () => {
          return addContactValue({ value_id: 1, contact_id: 1, contact_type: 'email', contact_value: 'another@email.com', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.value_id).to.equal(1)
              expect(result.contact_type).to.equal('email');
              expect(result.contact_value).to.equal('another@email.com')
              expect(result.anotherKey).to.equal('test')
            })
        })

      })

      describe('advert', () => {
        //// advert
        it('../controllers/adverts, Adds a new position', () => {
          return addAdvert({ position_id: 1, correspondence_id: 1, advert_ref: 'ABC123', contract_type: 'permanent', full_time_part_time: 'full-time', date_posted: '01-13-2008', date_seen: '02-13-2008', closing_date: '03-13-2008', website: 'www.easymoney.com', min_salary: '£3', max_salary: '£4', advert_description: 'This is a test', agency: false, job_board: 'indeed', voluntary: false, job_location: 'Exeter', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.advert_id).to.equal(8)
              expect(result.advert_description).to.equal('This is a test');
              expect(result.anotherKey).to.equal('test')
            })
        })

      })

      describe.only('new advert', () => {
        //// advert
        it('../controllers/newadvert, Adds a new position', () => {


          //  runs mock server
          return request(app)
            //get request to mock server
            .post('/api/adverts')
            .send({
              contact_values: [{value_id: null, contact_type: 'email', contact_value: 'wilma@theflintstones.com'},{value_id: null, contact_type: 'telephone', contact_value: '0123456789'}],
              contact_name: 'Wilma Flintstone',
              contact_position: 'House Wife',
              capacity_known: 'Fred',
              reference: true,
              data_known: null,
              contact_id: null,
              company_id: null,
              address_id: null,
              position_id: null,
              position_title: 'Bank Robber',
              correspondence_id: null,
              advert_ref: 'ABC123',
              contract_type: 'permanent',
              full_time_part_time: 'full-time',
              date_posted: '01-13-2008',
              date_seen: '02-13-2008',
              closing_date: '03-13-2008',
              website: 'www.easymoney.com/job_advert',
              min_salary: '£3',
              max_salary: '£4',
              advert_description: 'This is a test',
              agency: false,
              job_board: 'indeed',
              voluntary: false,
              job_location: 'Exeter',
              address_field: '62 West Wallaby Street',
              postcode: 'WA1 5RO',
              company_name: 'Easy Money Ltd',
              sector: 'crime',
              industry: 'finance',
              website: 'www.easymoney.com',
              profession_id: null,
              profession: 'robber',
              anotherKey: 'test'
            })
            // supertest expect  - key on promise object
            .expect(201)

            .then(res => {
              console.log(res.body)
              //           expect(res.body).to.be.an('Object');
              //           expect(res.body.advert_id).to.equal(1)
              //           expect(res.body.advert_ref).to.equal('test789')
              //         })
         
            
            })
        })

      })

      // it('../api/adverts, Updates an advert to the db', () => {

      //       // runs mock server
      //       return request(app)
      //         //get request to mock server
      //         .put('/api/adverts/1')
      //         .send({
      //           company_name: 'Test Company Ltd',
      //           job_title: 'Test job',
      //           advert_ref: 'test789',
      //           contract_type: '',
      //           full_time_part_time: '',
      //           date_posted: null,
      //           closing_date: null,
      //           live: false,
      //           website: '',
      //           min_salary: '',
      //           max_salary: '',
      //           advert_description: 'This is a test 2',
      //           agency: true,
      //           job_board: 'test',
      //           voluntary: false,
      //           job_location: 'test location'
      //         })
      //         // supertest expect  - key on promise object
      //         .expect(200)
      //         .then(res => {
      //           expect(res.body).to.be.an('Object');
      //           expect(res.body.advert_id).to.equal(1)
      //           expect(res.body.advert_ref).to.equal('test789')
      //         })
      //     })


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

module.exports = { controlleradverts }




