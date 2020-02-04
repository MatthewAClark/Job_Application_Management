/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getOccupations, getOccupationList, postNewOccupation, putOccupationById, occupationNotExist } = require('../testdata/occupations.data');

const { addOccupation } = require('../../controllers/db.occupations');

var length = 5;

// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const occupations = () => {

  describe('Get All Occupations getOccupations', () => {

    it('fetches the correct number of occupations from the table', () => {

      const testdata = {
        length: length,
        index: 1,
        occupation: 'administration',
        occupation_profile: 'A fine member of the administration team, I would make an excellent candidate'
      }

      return getOccupations()
        .then(result => {
          getOccupations.testresult(result, testdata)
        })

    })


    it('/api/occupations/, - fetches occupations', () => {

      const testdata = {
        length: length,
        index: 1,
        occupation: 'administration',
        occupation_profile: 'A fine member of the administration team, I would make an excellent candidate'
      }

      return request(app)

        .get('/api/occupations/')
        .expect(200)
        .then(result => {
          getOccupations.testresult(result.body, testdata)

        })

    })

  })


  describe('Get a list of  Occupations getOccupationList', () => {


    // describe.only('../models/occupations, ', () => {
    it('../models/occupations, Gets just a list of the occupations', () => {
      const testdata = {
        length: length,
        index: 1,
        occupation: 'administration',
        occupation_profile: undefined
      }
      return getOccupationList()
        .then(result => {
          getOccupationList.testresult(result, testdata)
        })
    })

    it(', - fetches list of occupations through API', () => {
      const testdata = {
        length: length,
        index: 1,
        occupation: 'administration',
        occupation_profile: undefined
      }
      return request(app)

        .get('/api/occupations/list')
        .expect(200)
        .then(result => {
          getOccupationList.testresult(result.body, testdata)
        })
    })
    //  })
  })




  describe('postNewOccupation', () => {
    const postdata = {
      occupation: 'Accountant',
      occupation_profile: 'A occupational accountant who really, does not want to be a lion tamer'
    }



    it('../models/occupations, Adds an occupation', () => {

      const testdata = {
        occupation_id: 6,
        occupation: 'Accountant',
        occupation_profile: 'A occupational accountant who really, does not want to be a lion tamer'
      }
      return postNewOccupation(postdata.occupation, postdata.occupation_profile)
        .then(result => {
          postNewOccupation.testresult(result, testdata)
        })


    })



    it('/api/occupations/ - adds a new occupation', () => {

      const testdata = {
        occupation_id: 7,
        occupation: 'Accountant',
        occupation_profile: 'A occupational accountant who really, does not want to be a lion tamer'
      }
      return request(app)
        .post('/api/occupations')
        .send(postdata)
        .expect(201)
        .then(result => {
          postNewOccupation.testresult(result.body, testdata)
        })


    })
  })



  describe('putOccupationById - updates an occupation', () => {

    it('../models/occupations, Updates an occupation', () => {
      const putdata = {
        occupation_id: 2,
        occupation: 'administration',
        occupation_profile: 'The best member of the Administration team I could ever be for you. You would be fool not to employ me'
      }

      const testdata = putdata
      return putOccupationById(putdata.occupation_id, putdata.occupation, putdata.occupation_profile)
        .then(result => {
          putOccupationById.testresult(result, testdata)
        })
    })

    it('/api/occupations/:occupation_id - updates an occupation', () => {
      const putdata = {
        occupation_id: 2,
        occupation: 'administration',
        occupation_profile: 'The worst member of the Administration team I could ever be for you. You would be fool not to employ me'
      }

      const testdata = putdata
      return request(app)
        .put(`/api/occupations/${putdata.occupation_id}`)
        .send(putdata)
        .expect(200)
        .then(result => {
          putOccupationById.testresult(result.body, testdata)
        })
    })

  })




  describe('Adding an occupation through a new advert or job contract (addOccupation)', () => {
    it('/controllers/occupations, Adds a new occupation that does not already exist', () => {
      const postdata = {
        occupation_id: null,
        occupation: 'Lion Tamer',
        occupation_profile: 'A junior Lion Tamer who has a background in Charterred Accountancy'
      }


      const testdata = {
        occupation: 'Lion Tamer',
        occupation_profile: 'A junior Lion Tamer who has a background in Charterred Accountancy'
      }

      return addOccupation(postdata)
        .then(result => {
          expect(result).to.be.an('object')
          expect(result.occupation_id).to.be.an('number')
          expect(result.occupation).to.equal(testdata.occupation)
          
        })
    })

    it('/controllers/occupations, Does NOT add another occupation if it already exists', () => {
      const postdata = {
        occupation_id: 1,
        occupation: 'finance',
        occupation_profile: ''
      }

      const testdata = {
        occupation: 'finance',
        occupation_profile: '',
        occupation_id: 1
      }

      return addOccupation(postdata)
        .then(result => {
          expect(result).to.be.an('object')
          expect(result.occupation_id).to.equal(testdata.occupation_id)
          expect(result.occupation).to.equal('finance')
          
        })
    })


   




  })






}

module.exports = { occupations }




