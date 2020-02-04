/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getContactMethodsById, getAllContactMethods, getLiveContactsByCompanyId, getContactsByCompanyId, getAllContacts, getContactById, postNewContact, putContactById, postContactMethod, getLiveContactsByAddressId, getContactsByAddressId, getContactsByCompanyAndAddressId, getLiveContactsByCompanyAndAddressId } = require('../testdata/contacts.data');
const { addContacts, addContactMethods } = require('../../controllers/db.contacts');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const contacts = () => {

  describe('get All Contacts', () => {
    const data = {
      index: 0,
      contact_name: 'Ray Rimes'
    }

    it('../models/contacts, gets all contacts', () => {
      return getAllContacts()
        .then(result => {
          getAllContacts.testresult(result, data)
        })
    })

    it('.../api/contacts, gets all contacts', () => {
      return request(app)
        //get request to mock server
        .get('/api/contacts/')
        .expect(200)
        .then(result => {
          getAllContacts.testresult(result.body, data)
        })
    })
  })

  describe('get contacts by ID', () => {

    const data = {
      contact_id: 1,
      index: 0
    }

    it('../models/contacts, get contact by ID', () => {
      return getContactById(data.contact_id)
        .then(result => {
          getContactById.testresult(result, data)
        })
    })

    it('.../api/contacts/contact/:contact_id, get contact by ID', () => {
      return request(app)
        //get request to mock server
        .get(`/api/contacts/contact/${data.contact_id}`)
        .expect(200)
        .then(result => {
          getContactById.testresult(result.body, data)
        })
    })

  })

  describe('get contacts by company id', () => {
    const data = {
      company_id: 1,
      index: 0,
      length: 1,
      contact_name: 'Ray Rimes'
    }

    it('../models/contacts, get contacts by CompanyID', () => {

      return getContactsByCompanyId(data.company_id)
        .then(result => {
          getContactsByCompanyId.testresult(result, data)
        })
    })

    it('.../api/contacts?company_id=id, get contacts by CompanyID', () => {

      return request(app)
        //get request to mock server
        .get(`/api/contacts?company_id=${data.company_id}`)
        .expect(200)
        .then(result => {
          getContactsByCompanyId.testresult(result.body, data)
        })
    })
  })

  describe('get live contacts by company id', () => {

    const data = {
      company_id: 1,
      length: 1,
      index: 0,
      contact_name: 'Ray Rimes'
    }

    it('../models/contacts, gets live contacts by CompanyID', () => {

      return getLiveContactsByCompanyId(data.company_id)
        .then(result => {
          getLiveContactsByCompanyId.testresult(result, data)
        })
    })

    it('.../api/contacts, gets live contacts by CompanyID', () => {

      return request(app)
        //get request to mock server
        .get(`/api/contacts/live?company_id=${data.company_id}`)
        .expect(200)
        .then(result => {
          getLiveContactsByCompanyId.testresult(result.body, data)
        })
    })
  })

  describe('get contacts by address id', () => {
    const data = {
      address_id: 1,
      length: 1,
      index: 0,
      contact_name: 'Ray Rimes'
    }

    it('../models/contacts, get contacts by AddressID', () => {

      return getContactsByAddressId(data.address_id)
        .then(result => {
          getContactsByAddressId.testresult(result, data)
        })
    })

    it('.../api/contacts, get contacts by AddressID', () => {
      return request(app)
        //get request to mock server
        .get(`/api/contacts?address_id=${data.address_id}`)
        .expect(200)
        .then(result => {
          getContactsByAddressId.testresult(result.body, data)
        })
    })
  })

  describe('get live contacts by address id', () => {
    const data = {
      address_id: 1,
      length: 1,
      index: 0,
      contact_name: 'Ray Rimes'
    }

    it('../models/contacts, gets live contacts by AddressID', () => {

      return getLiveContactsByAddressId(data.address_id)
        .then(result => {
          getLiveContactsByAddressId.testresult(result, data)
        })
    })

    it('.../api/contacts/live, gets live contacts by AddressID', () => {

      return request(app)
        //get request to mock server
        .get(`/api/contacts/live?address_id=${data.address_id}`)
        .expect(200)
        .then(result => {
          getLiveContactsByAddressId.testresult(result.body, data)
        })
    })

  })


  describe('get contacts by company and address id', () => {
    const data = {
      company_id: 1,
      address_id: 1,
      length: 1,
      index: 0,
      contact_name: 'Ray Rimes'
    }

    it('../models/contacts, get contacts by company and AddressID', () => {

      return getContactsByCompanyAndAddressId(data.company_id, data.address_id)
        .then(result => {
          getContactsByCompanyAndAddressId.testresult(result, data)
        })
    })

    it('.../api/contacts, get contacts by company and AddressID', () => {

      return request(app)
        //get request to mock server
        .get(`/api/contacts?address_id=${data.address_id}&company_id=${data.company_id}`)
        .expect(200)
        .then(result => {
          getContactsByCompanyAndAddressId.testresult(result.body, data)
        })
    })
  })

  describe('get live contacts by company and address id', () => {

    const data = {
      company_id: 1,
      address_id: 1,
      live: true,
      length: 1,
      index: 0,
      contact_name: 'Ray Rimes'
    }
    it('../models/contacts, gets live contacts by company and AddressID', () => {

      return getLiveContactsByCompanyAndAddressId(data.company_id, data.address_id)
        .then(result => {
          getLiveContactsByCompanyAndAddressId.testresult(result, data)
        })
    })

    it('.../api/contacts, gets live contacts by company and AddressID', () => {

      return request(app)
        //get request to mock server
        .get(`/api/contacts/live?address_id=${data.address_id}&company_id=${data.company_id}`)
        .expect(200)
        .then(result => {
          getLiveContactsByCompanyAndAddressId.testresult(result.body, data)
        })
    })
  })


  describe('add a new contact', () => {

    const data = {
      company_id: 1,
      address_id: 1,
      contact_name: 'Wilma Flintstone',
      contact_position: 'House Wife',
      capacity_known: 'Fred',
      reference: true,
      date_known: null
    }

    it('../models/contacts, Adds a new contact', () => {

      return postNewContact(data.company_id, data.address_id, data.contact_name, data.contact_position, data.capacity_known, data.reference, data.date_known)
        .then(result => {
          postNewContact.testresult(result, data)
        })
    })

    it('.../api/contacts, Adds a new contact', () => {

      return request(app)
        //get request to mock server
        .post(`/api/contacts`)
        .send(data)
        .expect(201)
        .then(result => {
          postNewContact.testresult(result.body, data)
        })
    })

  })

  describe('update existing contact', () => {

    const data = {
      contact_id: 1,
      company_id: 1,
      address_id: 1,
      contact_name: 'Barny Rubble',
      contact_position: '',
      capacity_known: 'Fred',
      reference: true,
      date_known: null,
      live: true
    }

    it('../models/contacts, Updates an existing contact', () => {

      return putContactById(data.contact_id, data.company_id, data.address_id, data.contact_name, data.contact_position, data.capacity_known, data.reference, data.date_known, data.live)
        .then(result => {
          putContactById.testresult(result, data)
        })
    })

    it('../models/contacts, Updates an existing contact', () => {

      return request(app)
        //get request to mock server
        .put(`/api/contacts/${data.contact_id}`)
        .send(data)
        .expect(200)
        .then(result => {
          putContactById.testresult(result.body, data)
        })
    })
  })


  describe('get all contact methods', () => {
    const data = {
      length: 2,
      index: 0,
      contact_method: 'Email'
    }

    it('../models/contact_methods, gets all contact_methods', () => {
      return getAllContactMethods()
        .then(result => {
          getAllContactMethods.testresult(result, data)
        })
    })
    it('../api/contacts/methods, gets all contact_methods', () => {
      return request(app)
        //get request to mock server
        .get(`/api/contacts/methods`)
        .then(result => {
          getAllContactMethods.testresult(result.body, data)
        })
    })
  })

  describe('get all contact methods for a particular contact by id', () => {

    const data = {
      contact_id: 1,
      index: 0,
      length: 2,
      contact_method: 'Email'
    }

    it('../models/contact_methods, gets contact_methods by id', () => {
      return getContactMethodsById(data.contact_id)
        .then(result => {
          getContactMethodsById.testresult(result, data)
        })
    })

    it('../api/contacts/methods, gets contact_methods by contact_id', () => {
      return request(app)
        //get request to mock server
        .get(`/api/contacts/methods/${data.contact_id}`)
        .then(result => {
          getContactMethodsById.testresult(result.body, data)
        })
    })
  })

  describe('adds new contact method to a contact by contact_id', () => {
    const data = {
      contact_id: 1,
      contact_method: 'fax',
      contact_value: '9876543210'
    }

    it('../models/contact_methods, posts a new contact_method by id', () => {
      return postContactMethod(data.contact_id, data.contact_method, data.contact_value)
        .then(result => {
          postContactMethod.testresult(result, data)
        })
    })

    it('../api/contacts/:contact_id, posts a new contact_method by id', () => {
      return request(app)
        //get request to mock server
        .post(`/api/contacts/${data.contact_id}`)
        .send(data)
        .then(result => {
          postContactMethod.testresult(result.body, data)
        })
    })
  })

  describe('addcontacts, add contacts from other components', () => {
    it('adds new contact to db that does not exist', () => {
      const data = {
        contacts: [{
          contact_id: null,
          company_id: 1,
          address_id: 1,
          contact_name: 'Fred Flintstone',
          contact_methods: []
        }
        ]
      }

      return addContacts(data)
        .then(result => {
          expect(result.contacts[0].contact_id).to.be.an('number')
          expect(result.contacts[0].contact_name).to.equal('Fred Flintstone')
        })
    })

    it('Does not add new contact to db when contact already exists', () => {
      const data = {
        contacts: [{
          contact_id: 1,
          company_id: 1,
          address_id: 1,
          contact_name: 'Ray Rimes',
          contact_methods: []
        }
        ]
      }

      return addContacts(data)
        .then(result => {
          expect(result.contacts[0].contact_id).to.equal(1)
          expect(result.contacts[0].contact_name).to.equal('Ray Rimes')
        })
    })

    it('Returns other data not relevant to contacts back and intact', () => {
      const data = {
        contacts: [{
          contact_id: 1,
          company_id: 1,
          address_id: 1,
          contact_name: 'Ray Rimes',
          contact_methods: []
        }],
        anotherKey: 'This is a test'
      }

      return addContacts(data)
        .then(result => {
          expect(result.contacts[0].contact_id).to.equal(1)
          expect(result.contacts[0].contact_name).to.equal('Ray Rimes')
          expect(result.anotherKey).to.equal('This is a test')
        })
    })

    it('Adds an array of contacts, only data that is not present within the array', () => {
      const data = {
        contacts: [{
          contact_id: 1,
          company_id: 1,
          address_id: 1,
          contact_name: 'Ray Rimes',
          contact_methods: []
        }, {
          contact_id: null,
          company_id: 1,
          address_id: 1,
          contact_name: 'Fred Flintstone',
          contact_methods: []
        }],
        anotherKey: 'This is a test'
      }

      return getAllContacts().then(contacts => {
        const initLength = contacts.length
        return addContacts(data)
          .then(result => {
            expect(result.contacts[0].contact_id).to.equal(1)
            expect(result.contacts[0].contact_name).to.equal('Ray Rimes')
            expect(result.contacts[1].contact_id).to.be.equal(initLength + 1)
            expect(result.contacts[1].contact_name).to.equal('Fred Flintstone')
            expect(result.anotherKey).to.equal('This is a test')
          })
      })


    })
  })

  describe('add contact methods, add contact methods from other components', () => {

    it('adds new method to db that does not exist', () => {
      return getAllContactMethods().then(methods => {
        initLength = methods.length
        const data = {
          contact_methods: [{
            method_id: null,
            contact_id: 1,
            contact_method: 'Fax',
            contact_value: '07734987'
          }
          ]
        }
        return addContactMethods(data)
          .then(result => {
            expect(result.contact_methods[0].method_id).to.be.an('number')
            expect(result.contact_methods[0].method_id).to.equal(initLength + 1)
            expect(result.contact_methods[0].contact_id).to.equal(1)
            expect(result.contact_methods[0].contact_method).to.equal('Fax')
            expect(result.contact_methods[0].contact_value).to.equal('07734987')
          })
      })
    })

    it('Does not add a new method to db if a contact does exist', () => {
      return getAllContactMethods().then(methods => {
        initLength = methods.length
        const data = {
          contact_methods: [{
            method_id: 1,
            contact_id: 1,
            contact_method: 'Email',
            contact_value: 'test@test'
          }
          ]
        }
        return addContactMethods(data)
          .then(result => {
            expect(result.contact_methods[0].method_id).to.be.an('number')
            expect(result.contact_methods[0].method_id).to.equal(1)
            expect(result.contact_methods[0].contact_id).to.equal(1)
            expect(result.contact_methods[0].contact_method).to.equal('Email')
            expect(result.contact_methods[0].contact_value).to.equal('test@test')
          })
      })
    })

  })

  describe('adds contact with contact_id returned to methods', () => {

    it('adds contact_id to methods', () => {
      return getAllContacts().then(methods => {
        initLength = methods.length
        const data = {
          contacts: [{
            contact_id: null,
            company_id: 1,
            address_id: 1,
            contact_name: 'Barny Rubble',
            contact_methods: [{
              method_id: null,
              contact_id: null,
              contact_method: 'fax',
              contact_value: '01234'
            }]
          }, {
            contact_id: 1,
            company_id: 1,
            address_id: 1,
            contact_name: 'Ray Rimes',
            contact_methods: [{
              method_id: 1,
              contact_id: 1,
              contact_method: 'email',
              contact_value: '12345'
            }, {
              method_id: null,
              contact_id: 1,
              contact_method: 'fax',
              contact_value: '98764'
            }]
          }]


        }
        return addContacts(data)
          .then(result => {
            
            
            if(result.contacts[0].contact_id === 2) {
              expect(result.contacts[0].contact_methods[0].contact_id).to.equal(2)
              expect(result.contacts[0].contact_methods[0].contact_method).to.equal('fax')
              expect(result.contacts[0].contact_methods[0].contact_value).to.equal('01234')

              expect(result.contacts[1].contact_methods[0].contact_id).to.equal(1)
              expect(result.contacts[1].contact_methods[0].contact_method).to.equal('email')
              expect(result.contacts[1].contact_methods[0].contact_value).to.equal('12345')
              expect(result.contacts[1].contact_methods[1].contact_id).to.equal(1)
              expect(result.contacts[1].contact_methods[1].contact_method).to.equal('fax')
              expect(result.contacts[1].contact_methods[1].contact_value).to.equal('98764')
            } else {
              expect(result.contacts[1].contact_methods[0].contact_id).to.equal(2)
              expect(result.contacts[1].contact_methods[0].contact_method).to.equal('fax')
              expect(result.contacts[1].contact_methods[0].contact_value).to.equal('01234')

              expect(result.contacts[0].contact_methods[0].contact_id).to.equal(1)
              expect(result.contacts[0].contact_methods[0].contact_method).to.equal('email')
              expect(result.contacts[0].contact_methods[0].contact_value).to.equal('12345')
              expect(result.contacts[0].contact_methods[1].contact_id).to.equal(1)
              expect(result.contacts[0].contact_methods[1].contact_method).to.equal('fax')
              expect(result.contacts[0].contact_methods[1].contact_value).to.equal('98764')
            }
            
            
          })
      })
    })

    // it('Does not add a new method to db if a contact does exist', () => {
    //   return getAllContactMethods().then(methods => {
    //     initLength = methods.length
    //     const data = {
    //       contact_methods: [{
    //         method_id: 1,
    //         contact_id: 1,
    //         contact_method: 'Email',
    //         contact_value: 'test@test'
    //       }
    //       ]
    //     }
    //     return addContactMethods(data)
    //       .then(result => {
    //         expect(result.contact_methods[0].method_id).to.be.an('number')
    //         expect(result.contact_methods[0].method_id).to.equal(1)
    //         expect(result.contact_methods[0].contact_id).to.equal(1)
    //         expect(result.contact_methods[0].contact_method).to.equal('Email')
    //         expect(result.contact_methods[0].contact_value).to.equal('test@test')
    //       })
    //   })
    // })

  })

}

module.exports = { contacts }




