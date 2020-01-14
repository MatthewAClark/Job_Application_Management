
const { postNewAdvert, getAllAdverts, getLiveAdverts, getAdvertById, putAdvertById } = require('../models/db.adverts');
const { postNewPosition, putPositionById } = require('../models/db.positions');
const { postNewCorrespondence, putCorrespondenceById } = require('../models/db.correspondence');

const { postNewContact, postContactValue } = require('../models/db.contacts');
const { postNewAddress } = require('../models/db.addresses');
const { postNewCompany } = require('../models/db.companies');
const { postNewProfession } = require('../models/db.professions');

const addProfession = (data) => new Promise(function (res, rej) {
  if (data.profession_id === null) {
    postNewProfession(data.profession, '')
      .then(profession => res({ ...data, ...profession }))
  } else {
    return res(data)
  }
})

const addPosition = (data) => new Promise(function (res, rej) {
  postNewPosition(data.profession_id, data.position_title)
    .then(profession => res({ ...data, ...profession }))
})

const addCompany = (data) => new Promise(function (res, rej) {
  if (data.company_id === null) {
    postNewCompany(data.company_name, data.sector, data.industry, data.website)
      .then(company => res({ ...data, ...company }))
  } else {
    return res(data)
  }
})

const addAddress = (data) => new Promise(function (res, rej) {
  if (data.address_id === null) {
    postNewAddress(data.company_id, data.address_field, data.postcode, data.live)
      .then(address => res({ ...data, ...address }))
  } else {
    return res(data)
  }
});

const addContact = (data) => new Promise(function (res, rej) {
  if (data.contact_id === null) {
    postNewContact(data.company_id, data.address_id, data.contact_name, data.contact_position, data.capacity_known, data.reference, data.date_known)
      .then(contact => {
        contact.contact_values = data.contact_values.map((value, index) => {
          value.contact_id = contact.contact_id
          return value;
        })
        return res({ ...data, ...contact });
      })
    // .then( data =>res(data))
  } else {
    return res(data)
  }
});

const addContactValue = (data) => new Promise(function (res, rej) {
  if (data.value_id === null) {
    postContactValue(data.contact_id, data.contact_type, data.contact_value, data.correspondence_id)
      .then(value => res({ ...data, ...value }))
  } else {
    return res(data)
  }
})

const addCorrespondence = (data) => new Promise(function (res, rej) {
  // if (data.correspondence_id === null) {
  postNewCorrespondence(data.contact_id, data.address_id, data.company_id, data.position_id)
  .then(correspondence => {
    correspondence.contact_values = data.contact_values.map((value, index) => {
      value.correspondence_id = correspondence.correspondence_id
      return value;
    })
    return res({ ...data, ...correspondence });
  })
    // .then(correspondence => res({ ...data, ...correspondence }))
  // } else {
  //   return res(data)
  // }
});

const addAdvert = (data) => new Promise(function (res, rej) {
  postNewAdvert(data.position_id, data.correspondence_id, data.advert_ref, data.contract_type, data.full_time_part_time, data.date_posted, data.date_seen, data.closing_date, data.website, data.min_salary, data.max_salary, data.advert_description, data.agency, data.job_board, data.voluntary, data.job_location)
    .then(advert => res({ ...data, ...advert }))

});




function addNewAdvert(req, res, next) {

  // Fetch todays date to datestamp entry into database
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  if (req.body.date_seen === null) req.body.date_seen = date;

  // profession, company, address, contact, correspondence, position, advert and contact values
  addProfession(req.body).then(data => addCompany(data)).then(data => addAddress(data)).then(data => addContact(data)).then(data => addPosition(data)).then(data => addCorrespondence(data)).then(data => addAdvert(data))
    .then(data => {
      return Promise.all(data.contact_values.filter(value => !(value.value_id > 0)).map((value, index) => {
        return addContactValue(value)
      })).then(values => {
        return { ...data, contact_values: values }
      })
    })
    .then(data => res.status(201).send(data))
    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });

  // addNewPosition(req.body.)

  // postNewPosition(req.body.profession_id)
  //   .then(position => {
  //     postNewCorrespondence(req.body.contact_id, req.body.address_id, req.body.company_id, position.position_id)
  //       .then(correspondence => {
  //         postNewAdvert(position.position_id, correspondence.correspondence_id, req.body.job_title, req.body.advert_ref, req.body.contract_type, req.body.full_time_part_time, req.body.date_posted, date, req.body.closing_date, req.body.website, req.body.min_salary, req.body.max_salary, req.body.advert_description, req.body.agency, req.body.job_board, req.body.voluntary, req.body.job_location)
  //           .then(data => res.status(201).send(data))
  //           .catch((error) => {
  //             console.log(error)
  //             return next({ status: 400, error: error })
  //           });
  //       })
  //   });

  // Add new advert into advert table

}

function updateAdvertById(req, res, next) {

  // putPositionById(req.body.position_id, req.body.profession_id)
  //   .then(position => {
  //     putCorrespondenceById(req.body.correspondence_id, req.body.contact_id, req.body.address_id, req.body.company_id)
  //   })
  //   .then(correspondence => {
  putAdvertById(req.params.advert_id, req.body.job_title, req.body.advert_ref, req.body.contract_type, req.body.full_time_part_time, req.body.date_posted, req.body.closing_date, req.body.live, req.body.advert_url, req.body.min_salary, req.body.max_salary, req.body.advert_description, req.body.agency, req.body.job_board, req.body.voluntary, req.body.job_location, req.body.applied)
    .then(data => {
      res.status(200).send(data)
    })
    .catch((error) => {
      console.log(error)
      next({ status: 400, error: error })
    });
  // })


}

function fetchAllAdverts(req, res, next) {
  getAllAdverts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchLiveAdverts(req, res, next) {
  getLiveAdverts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchAdvertById(req, res, next) {
  getAdvertById(req.params.advert_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

module.exports = { addCorrespondence, addNewAdvert, addProfession, addCompany, addAddress, addContact, addPosition, addAdvert, addContactValue, fetchAllAdverts, fetchLiveAdverts, fetchAdvertById, updateAdvertById };

