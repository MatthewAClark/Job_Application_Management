/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
// const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getAllAdverts, getLiveAdverts, getAdvertById, getAllAdvertContacts, postNewAdvert, putAdvertById } = require('../testdata/adverts.data');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const adverts = () => {

  describe('model compinent testing for adverts', () => {
    it('../models/adverts, gets all adverts', () => {
      return getAllAdverts()
        .then(result => {
          getAllAdverts.testresult(result)
        })
    })

    it('../models/adverts, gets all live adverts', () => {
      return getLiveAdverts()
        .then(result => {
          getLiveAdverts.testresult(result)
        })
    })

    it('../models/adverts, gets advert by id', () => {
      const data = getAdvertById.getdata();
      return getAdvertById(data.advert_id)
        .then(result => {
          getAdvertById.testresult(result)
        })
    })

    it('../models/adverts, get all advert contacts by advert id', () => {
      const data = getAllAdvertContacts.getdata();
      return getAllAdvertContacts(data.advert_id)
        .then(result => {
          getAllAdvertContacts.testresult(result)
        })
    })

    it('../models/advert, Adds a new advert', () => {
      const data = postNewAdvert.postdata();
      return postNewAdvert(
        data.occupation_id,
        data.company_id,
        data.address_id,
        data.position_title,
        data.advert_ref,
        data.contract_type,
        data.contract_hours,
        data.date_posted,
        data.date_seen,
        data.closing_date,
        data.advert_url,
        data.min_salary,
        data.max_salary,
        data.advert_description,
        data.agency,
        data.job_board,
        data.voluntary,
        data.job_location
      )
        .then(result => {
          postNewAdvert.testresult(result)
        })
    })

    it('../models/advert, updates an advert', () => {
      const data = putAdvertById.putdata();

      return putAdvertById(
        data.advert_id,
        data.occupation_id,
        data.company_id,
        data.address_id,
        data.position_title,
        data.advert_ref,
        data.contract_type,
        data.contract_hours,
        data.date_posted,
        data.date_seen,
        data.closing_date,
        data.live,
        data.advert_url,
        data.min_salary,
        data.max_salary,
        data.advert_description,
        data.agency,
        data.job_board,
        data.voluntary,
        data.job_location
      )
        .then(result => {
          putAdvertById.testresult(result)
        })
    })
  })


  // We want the advert controller to add all relevant data regarding the advert to the db. This includes occupation, company, address and contacts. We only want it to add a new one of any of these if the data does not already exist in the db.
  describe('controller advert test', () => {
    it('../controllers/adverts')
  })

}

module.exports = { adverts }




