/* eslint-disable no-console*/

// component model testing
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const request = require('supertest');
const app = require('../../server');

// Import required model components
const { getAllPositions, postNewPosition, putPositionById } = require('../../models/db.positions');
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const positions = () => {
  describe('Model testing', () => {
    describe('Positions table', () => {
      it('../models/positions, gets all positions', () => {
        return getAllPositions()
          .then(result => {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(7);
            expect(result[0].occupation_id).to.equal(1)
          })
      })

      it('../models/positions, Adds a position', () => {
        return postNewPosition(5, 'Junior Software Developer')
          .then(result => {
            expect(result).to.be.an('object');
            expect(result.position_id).to.equal(8);
            expect(result.occupation_id).to.equal(5);
          })
      })

      it('../models/positions, Updates a position', () => {
        return putPositionById(1, 2)
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.position_id).to.equal(1)
          expect(result.occupation_id).to.equal(2)
        })
      })





    })

  })
}

module.exports = { positions }




