/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';


   

const { expect } = require('chai');

const request = require('supertest');
const app = require('../../server');

// Import required model components
const { updateAdvertById, addNewContacts, updateCorrespondence, updateAdvert, updatePosition, addContactValue, addProfession, addCompany, addAddress, addContact, addCorrespondence, addPosition, addAdvert } = require('../../controllers/db.adverts');
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

      describe.only('addNewContacts', () => {
        it('../controllers/adverts, AddNewContact returns an object we give it with no contacts intact', () => {
          return addNewContacts({
            contacts: [{contact_id: undefined}],
            anotherKey: 'Test'
          })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.anotherKey).to.equal('Test')
            })
        })

        it('../controllers/adverts, AddNewContact - ignores a contact already added and returns the object', () => {
          return addNewContacts({
            contacts: [{ contact_id: 1, contact_name: 'Fred' }]
          })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.contacts[0].contact_id).to.equal(1)
              expect(result.contacts[0].contact_name).to.equal('Fred')
            })
        })

        it('../controllers/adverts, AddNewContact - adds a single contact when contact_id=null', () => {
          return addNewContacts({
            contacts: [{
              contact_id: null,
              contact_name: 'Fred',
              company_id: 1,
              address_id: 1,
              contact_position: '',
              capacity_known: '',
              reference: false,
              date_known: null
            }],
          })
            .then(result => {
              
              expect(result).to.be.an('object');
              expect(result.contacts[0].contact_id).to.equal(2)
              expect(result.contacts[0].contact_name).to.equal('Fred')
            })
        })

        it.only('../controllers/adverts, AddNewContact - adds multiple contacts when contact_id=null', () => {
          return addNewContacts({
            contacts: [{
              contact_id: null,
              contact_name: 'Fred',
              company_id: 1,
              address_id: 1,
              contact_position: '',
              capacity_known: '',
              reference: false,
              date_known: null
            },{
              contact_id: null,
              contact_name: 'Barny',
              company_id: 1,
              address_id: 1,
              contact_position: '',
              capacity_known: '',
              reference: false,
              date_known: null
            }],
          })
            .then(result => {
              expect(result).to.be.an('object');

              expect(result.contacts[0].contact_id).to.be.an('number')
              expect(result.contacts[0].contact_name).to.equal('Fred')
              expect(result.contacts[1].contact_id).to.be.an('number')
              expect(result.contacts[1].contact_name).to.equal('Barny')
            })
        })


        it.only('../controllers/adverts, AddNewContact - only adds contact when contact_id is null', () => {
          return addNewContacts({
            contacts: [{
              contact_id: 1,
              contact_name: 'Fred',
              company_id: 1,
              address_id: 1,
              contact_position: '',
              capacity_known: '',
              reference: false,
              date_known: null
            },{
              contact_id: null,
              contact_name: 'Barny',
              company_id: 1,
              address_id: 1,
              contact_position: '',
              capacity_known: '',
              reference: false,
              date_known: null
            }],
          })
            .then(result => {
              expect(result).to.be.an('object');

              expect(result.contacts[0].contact_id).to.equal(1)
              expect(result.contacts[0].contact_name).to.equal('Fred')
              expect(result.contacts[1].contact_id).to.be.an('number')
              expect(result.contacts[1].contact_name).to.equal('Barny')
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

      describe('new advert', () => {
        //// advert
        it('../controllers/newadvert, Adds a new position', () => {


          //  runs mock server
          return request(app)
            //get request to mock server
            .post('/api/adverts')
            .send({
              contact_values: [{ value_id: null, contact_type: 'email', contact_value: 'wilma@theflintstones.com' }, { value_id: null, contact_type: 'telephone', contact_value: '0123456789' }],
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

      describe('update position', () => {
        //// advert
        it('../controllers/positions, Update position', () => {
          return updatePosition({ position_id: 1, position_title: 'Junior VAT Officer', anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.position_id).to.equal(1)
              expect(result.position_title).to.equal('Junior VAT Officer');
              expect(result.anotherKey).to.equal('test')
            })
        })

      })

      describe('update advert', () => {
        //// advert
        it('../controllers/adverts, Update advert', () => {
          return updateAdvert({ advert_id: 1, advert_ref: 'REC/19/06732', contract_type: 'contract', full_time_part_time: 'part-time', date_posted: '2008-12-20', date_seen: '2019-12-20', closing_date: '2020-01-15', live: false, advert_url: 'https://www.somersetjobs.gov.uk', min_salary: '21,032', max_salary: '25,025', advert_description: 'Junior VAT officer required to make the tea', agency: true, job_board: 'indeed', voluntary: false, job_location: 'Plymouth', applied: false, anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.advert_id).to.equal(1)
              expect(result.advert_ref).to.equal('REC/19/06732');
              expect(result.job_location).to.equal('Plymouth');
              expect(result.advert_url).to.equal('https://www.somersetjobs.gov.uk');
              expect(result.advert_description).to.equal('Junior VAT officer required to make the tea');
              expect(result.anotherKey).to.equal('test')
            })
        })

      })

      describe('update correspondence', () => {
        //// advert
        it('../controllers/adverts, Update correspondence', () => {
          return updateCorrespondence({ correspondence_id: 1, contact_id: 2, address_id: 2, company_id: 2, anotherKey: 'test' })
            .then(result => {
              expect(result).to.be.an('object');
              expect(result.correspondence_id).to.equal(1)
              expect(result.contact_id).to.equal(2);
              expect(result.address_id).to.equal(2);
              expect(result.company_id).to.equal(2);
              expect(result.anotherKey).to.equal('test')
            })
        })

      })

      describe('update advert', () => {
        //// advert
        it('../controllers/adverts, Update correspondence', () => {

          return request(app)
            //get request to mock server
            .put('/api/adverts/1')
            .send({
              advert_id: 1,
              profession_id: 1,
              company_id: 1,
              address_id: 1,
              contact_id: 1,
              position_id: 1,
              contact_values: [],
              correspondence_id: 1,
              position_title: 'junior VAT Officer',
              advert_description: 'make the tea',
              advert_ref: 'ABC123',
              contract_type: 'permanent',
              full_time_part_time: 'full-time',
              date_posted: null,
              date_seen: null,
              closing_date: null,
              live: true,
              advert_url: 'www.advertjobs.com/vacancy',
              min_salary: '£3',
              max_salary: '$5',
              agency: false,
              job_board: '',
              voluntary: false,
              job_location: 'Birmingham',
              applied: false,
              anotherKey: 'test'
            })
            .expect(200)


            .then(result => {
              expect(result.body).to.be.an('object');
              expect(result.body.company_id).to.equal(1)
              expect(result.body.job_location).to.equal('Birmingham');
              expect(result.body.position_title).to.equal('junior VAT Officer');
              expect(result.body.anotherKey).to.equal('test');
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




