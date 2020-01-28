/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
// const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getContactMethodsById, getAllContactMethods, getLiveContactsByCompanyId, getContactsByCompanyId, seedNewContact, getAllContacts, getContactById, postNewContact, putContactById, postContactMethod, getLiveContactsByAddressId, getContactsByAddressId, getContactsByCompanyAndAddressId, getLiveContactsByCompanyAndAddressId } = require('../testdata/contacts.data');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const contacts = () => {
 
    describe('model components for contacts', () => {
      it('../models/contacts, gets all contacts', () => {
        return getAllContacts()
          .then(result => {
            getAllContacts.testresult(result)
          })
      })

      it('../models/contacts, get contact by ID', () => {
        const data = getContactById.getdata()
        return getContactById(data.contact_id)
          .then(result => {
            getContactById.testresult(result)
          })
      })

      it('../models/contacts, get contacts by CompanyID', () => {
        const data = getContactsByCompanyId.getdata()
        return getContactsByCompanyId(data.company_id)
          .then(result => {
            getContactsByCompanyId.testresult(result)
          })
      })

      it('../models/contacts, gets live contacts by CompanyID', () => {
        const data = getLiveContactsByCompanyId.getdata()
        return getLiveContactsByCompanyId(data.company_id)
          .then(result => {
            getLiveContactsByCompanyId.testresult(result)
          })
      })

      it('../models/contacts, get contacts by AddressID', () => {
        const data = getContactsByAddressId.getdata()
        return getContactsByAddressId(data.address_id)
          .then(result => {
            getContactsByAddressId.testresult(result)
          })
      })

      it('../models/contacts, gets live contacts by AddressID', () => {
        const data = getLiveContactsByAddressId.getdata()
        return getLiveContactsByAddressId(data.address_id)
          .then(result => {
            getLiveContactsByAddressId.testresult(result)
          })
      })

      it('../models/contacts, get contacts by company and AddressID', () => {
        const data = getContactsByCompanyAndAddressId.getdata()
        return getContactsByCompanyAndAddressId(data.company_id, data.address_id)
          .then(result => {
            getContactsByCompanyAndAddressId.testresult(result)
          })
      })

      it('../models/contacts, gets live contacts by company and AddressID', () => {
        const data = getLiveContactsByCompanyAndAddressId.getdata()
        return getLiveContactsByCompanyAndAddressId(data.company_id, data.address_id)
          .then(result => {
            getLiveContactsByCompanyAndAddressId.testresult(result)
          })
      })




      it('../models/contacts, Adds a new contact', () => {
        const data = postNewContact.postdata()
        return postNewContact(data.company_id, data.address_id, data.contact_name, data.contact_position, data.capacity_known, data.reference, data.date_known)
          .then(result => {
            postNewContact.testresult(result)
          })
      })

      it('../models/contacts, Updates an existing contact', () => {
        const data = putContactById.putdata()
        return putContactById(data.contact_id, data.company_id, data.address_id, data.contact_name, data.contact_position, data.capacity_known, data.reference, data.date_known, data.live)
          .then(result => {
            putContactById.testresult(result)
          })
      })
    })

    describe('contact_methods', () => {

      it('../models/contact_methods, gets all contact_methods', () => {
        return getAllContactMethods()
          .then(result => {
            getAllContactMethods.testresult(result)
          })
      })

      it.only('../models/contact_methods, gets contact_methods by id', () => {
        const data = getContactMethodsById.getdata()
        return getContactMethodsById(data.contact_id)
          .then(result => {
            getContactMethodsById.testresult(result)
          })
      })

      it('../models/contact_methods, posts a new contact_method by id', () => {
        const data = postContactMethod.postdata()
        return postContactMethod(data.contact_id, data.contact_method, data.contact_value)
          .then(result => {
           postContactMethod.testresult(result)
          })
      })


    })

    describe('api routing for Contacts', () => {

      it('.../api/contacts, gets all contacts', () => {
        return request(app)
        //get request to mock server
        .get('/api/contacts/')
        .expect(200)    
          .then(result => {
            getAllContacts.testresult(result.body)
          })
      })

      it('.../api/contacts/contact/:contact_id, get contact by ID', () => {
        const data = getContactById.getdata()
        return request(app)
        //get request to mock server
        .get(`/api/contacts/contact/${data.contact_id}`)
        .expect(200)  
          .then(result => {
            getContactById.testresult(result.body)
          })
      })

      it('.../api/contacts?company_id=id, get contacts by CompanyID', () => {
        const data = getContactsByCompanyId.getdata()
        return request(app)
        //get request to mock server
        .get(`/api/contacts?company_id=${data.company_id}`)
        .expect(200)  
          .then(result => {
            getContactsByCompanyId.testresult(result.body)
          })
      })

      it('.../api/contacts, gets live contacts by CompanyID', () => {
        const data = getLiveContactsByCompanyId.getdata()
        return request(app)
        //get request to mock server
        .get(`/api/contacts/live?company_id=${data.company_id}`)
        .expect(200) 
          .then(result => {
            getLiveContactsByCompanyId.testresult(result.body)
          })
      })

      it('.../api/contacts, get contacts by AddressID', () => {
        const data = getContactsByAddressId.getdata()
        return request(app)
        //get request to mock server
        .get(`/api/contacts?address_id=${data.address_id}`)
        .expect(200) 
          .then(result => {
            getContactsByAddressId.testresult(result.body)
          })
      })

      it('.../api/contacts/live, gets live contacts by AddressID', () => {
        const data = getLiveContactsByAddressId.getdata()
        return request(app)
        //get request to mock server
        .get(`/api/contacts/live?address_id=${data.address_id}`)
        .expect(200) 
          .then(result => {
            getLiveContactsByAddressId.testresult(result.body)
          })
      })

      it('.../api/contacts, get contacts by company and AddressID', () => {
        const data = getContactsByCompanyAndAddressId.getdata()
        return request(app)
        //get request to mock server
        .get(`/api/contacts?address_id=${data.address_id}&company_id=${data.company_id}`)
        .expect(200) 
          .then(result => {
            getContactsByCompanyAndAddressId.testresult(result.body)
          })
      })

      it('.../api/contacts, gets live contacts by company and AddressID', () => {
        const data = getLiveContactsByCompanyAndAddressId.getdata()
        return request(app)
        //get request to mock server
        .get(`/api/contacts/live?address_id=${data.address_id}&company_id=${data.company_id}`)
        .expect(200) 
          .then(result => {
            getLiveContactsByCompanyAndAddressId.testresult(result.body)
          })
      })




      it('.../api/contacts, Adds a new contact', () => {
        const data = postNewContact.postdata()
        return request(app)
        //get request to mock server
        .post(`/api/contacts`)
        .send(data)
        .expect(201) 
          .then(result => {
            postNewContact.testresult(result.body)
          })
      })

      it('../models/contacts, Updates an existing contact', () => {
        const data = putContactById.putdata()
        return request(app)
        //get request to mock server
        .put(`/api/contacts/${data.contact_id}`)
        .send(data)
        .expect(200) 
          .then(result => {
            putContactById.testresult(result.body)
          })
      })
 
      describe('api routing for Contact methods', () => {
        it('../api/contacts/methods, gets all contact_methods', () => {
          return request(app)
          //get request to mock server
          .get(`/api/contacts/methods`)
            .then(result => {
              getAllContactMethods.testresult(result.body)
            })
        })
  
        it('../api/contacts/methods, gets contact_methods by id', () => {
          const data = getContactMethodsById.getdata()
          return request(app)
          //get request to mock server
          .get(`/api/contacts/methods/${data.contact_id}`)
            .then(result => {
              getContactMethodsById.testresult(result.body)
            })
        })
  
        it('../api/contacts/:contact_id, posts a new contact_method by id', () => {
          const data = postContactMethod.postdata()
          return request(app)
          //get request to mock server
          .post(`/api/contacts/${data.contact_id}`)
          .send(data)
            .then(result => {
             postContactMethod.testresult(result.body)
            })
        })
      })
    })


}

module.exports = { contacts }




