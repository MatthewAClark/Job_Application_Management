/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
// const { expect } = require('chai');
const request = require('supertest');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getOccupations, getOccupationList, postNewOccupation, putOccupationById } = require('../testdata/occupations.data');


// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const occupations = () => {

  describe('../models/occupations Model components', () => {
    it('../models/occupations, gets all occupations', () => {
      return getOccupations()
        .then(occupations => {
          getOccupations.testresult(occupations)
        })
    })

    it('../models/occupations, Gets just a list of the occupations', () => {
      return getOccupationList()
        .then(result => {
          getOccupationList.testresult(result)
        })
    })

    it('../models/occupations, Adds a occupation', () => {
      const data = postNewOccupation.postdata()
      return postNewOccupation(data.occupation, data.occupation_profile)
        .then(result => {
          postNewOccupation.testresult(result)
        })
    })

    it('../models/occupations, Updates a occupation', () => {
      const data = putOccupationById.putdata()
      return putOccupationById(data.occupation_id, data.occupation, data.occupation_profile)
        .then(result => {
          putOccupationById.testresult(result)
        })
    })

  })
  describe('Routes components', () => {
    it('/api/occupations/, - fetches occupations', () => {
      return request(app)

        .get('/api/occupations/')
        .expect(200)
        .then(result => {
          getOccupations.testresult(result.body)

        })
    })



    it('/api/occupations/list, - fetches list of occupations', () => {
      return request(app)

        .get('/api/occupations/list')
        .expect(200)
        .then(result => {
          getOccupationList.testresult(result.body)
        })
    })

    it('/api/occupations/ - adds a new occupation', () => {
      const data = postNewOccupation.postdata()
      return request(app)
        .post('/api/occupations')
        .send(data)
        .expect(201)
        .then(result => {
          postNewOccupation.testresult(result.body)
        })
    })

    it('/api/occupations/:occupation_id - updates an occupation', () => {
      const data = putOccupationById.putdata()
      return request(app)
        .put(`/api/occupations/${data.occupation_id}`)
        .send(data)
        .expect(200)
        .then(result => {
          putOccupationById.testresult(result.body)
        })
    })

  })

}

module.exports = { occupations }




