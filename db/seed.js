 process.env.NODE_ENV = 'prod';


 require('dotenv').config({path: `./.${process.env.NODE_ENV}.env`})
// if(!process.env.NODE_ENV)  process.env.NODE_ENV = 'dev';
// if(process.env.NODE_ENV !== 'prod') require('dotenv').config({
//   path: `./.${process.env.NODE_ENV}.env`
// });

const readjson = require('readjson');

const { seedNewAddress } = require('../models/db.addresses.js');
const { seedNewAdvert } = require('../models/db.adverts.js');
const { seedNewCompany } = require('../models/db.companies.js');
const { seedNewContact } = require('../models/db.contacts.js');
const { seedNewCorrespondence } = require('../models/db.correspondence.js');
const { seedNewPosition } = require('../models/db.positions.js');
const { seedNewProfession } = require('../models/db.professions.js');



//const seedData = () => {
const professions = (readjson.sync(`./db/${process.env.NODE_ENV}/seed/professions.json`));
const positions = (readjson.sync(`./db/${process.env.NODE_ENV}/seed/positions.json`));
const companies = (readjson.sync(`./db/${process.env.NODE_ENV}/seed/companies.json`));
const addresses = (readjson.sync(`./db/${process.env.NODE_ENV}/seed/addresses.json`));
const contacts = (readjson.sync(`./db/${process.env.NODE_ENV}/seed/contacts.json`));
const correspondence = (readjson.sync(`./db/${process.env.NODE_ENV}/seed/correspondence.json`));
const adverts = (readjson.sync(`./db/${process.env.NODE_ENV}/seed/adverts.json`));






//const delays = (readjson.sync('./data/delay_data/allDelays.json'));

Promise.all(professions.map(elem => {
  return (new Promise(function (res) {
    // console.log(elem)
    res(seedNewProfession(elem.profession_id, elem.profession, elem.profession_profile))

  }))

}))
.then(() => {

  Promise.all(positions.map(elem => {
    return (new Promise(function (res) {

      res(seedNewPosition(elem.position_id,
        elem.profession_id,
        elem.position_title
       ))

    }));

  }))


  .then(() => {
    Promise.all(companies.map(elem => {
      return (new Promise(function (res) {

        res(seedNewCompany(elem.company_id,
          elem.company_name,
          elem.sector,
          elem.industry,
          elem.website))

      }));

    }))
      .then(() => {
        Promise.all(addresses.map(elem => {
          return (new Promise(function (res) {
            //const result = 

            res(seedNewAddress(elem.address_id, elem.company_id, elem.address_field, elem.postcode, elem.live));
            //res(console.log('you should see this afterwards'))

          }));

        })

        )
          .then(() => {
            Promise.all(contacts.map(elem => {
              return (new Promise(function (res) {
                // console.log(elem)
                res(seedNewContact(elem.contact_id, elem.company_id, elem.address_id, elem.contact_name, elem.contact_position, elem.capacity_known, elem.reference, elem.date_known, elem.live))

              }));

            }))
              .then(() => {
                Promise.all(correspondence.map(elem => {
                  return (new Promise(function (res) {
                    // console.log(elem)
                    res(seedNewCorrespondence(elem.correspondence_id, elem.contact_id, elem.address_id, elem.company_id, elem.position_id))

                  }));

                }))

                  .then(() => {
                    Promise.all(adverts.map(elem => {
                      return (new Promise(function (res) {
                        
                        res(seedNewAdvert(elem.advert_id,
                          elem.position_id,
                          elem.correspondence_id,
                          elem.advert_ref,
                          elem.contract_type,
                          elem.full_time_part_time,
                          elem.date_posted,
                          elem.date_seen,
                          elem.closing_date,
                          elem.live,
                          elem.advert_url,
                          elem.min_salary,
                          elem.max_salary,
                          elem.advert_description,
                          elem.agency,
                          elem.job_board,
                          elem.voluntary,
                          elem.job_location,
                          elem.applied));

                      }));

                    }))
                  })

              })


          })

      })
  })

})









