
const { postAllRequirements, getRequirementsByAdvertId, postNewAdvert, getAllAdvertsRaw, getAllAdverts, getLiveAdverts, getAdvertById, putAdvertById, postAdvertContact, getAdvertContactsByAdvertId, getAllRequirements } = require('../models/db.adverts');
const { postNewPosition, putPositionById } = require('../models/db.positions');
const { postNewPosition_contact, putPosition_contactById } = require('../models/db.position_contacts');
const { addSkills } = require('../controllers/db.skills')

const { addOccupation } = require('../controllers/db.occupations');
const { addCompany } = require('../controllers/db.companies');
const { addAddress } = require('../controllers/db.addresses');
const { addContacts, addContactMethods } = require('../controllers/db.contacts');

const addAdvertContacts = (data) => new Promise(function (res, rej) {

  Promise.all(data.contacts.map((contact, i) => {
    return postAdvertContact(data.advert_id, contact.contact_id)
      .then(advert_contact => {
        var contacts = data.contacts
        contacts[i] = { ...contact, ...advert_contact }
        data = { ...data, contacts: contacts }
      })
  }))
    .then(() => {

      res(data)
    })

});

const addAdvert = (data) => new Promise(function (res, rej) {
  postNewAdvert(data.occupation_id, data.company_id, data.address_id, data.position_title, data.advert_ref, data.contract_type, data.contract_hours, data.date_posted, data.date_seen, data.closing_date, data.advert_url, data.min_salary, data.max_salary, data.advert_description, data.agency, data.job_board, data.voluntary, data.job_location)
    .then(advert => res({ ...data, ...advert }))

});

const addRequirements = (data) => new Promise(function (res, rej) {
  Promise.all(data.skills.map((skill, i) => {
    if (skill.skill_id !== null) {
    return postAllRequirements(skill.skill_id, data.advert_id, skill.essential, skill.duration, skill.experience_description)
    .then(skill => {
      var skills = data.skills
      skills[i] = {...skills[i], ...skill}
      data = {...data, skills: skills}
    })
    }
  }))
    .then(() => {
      res(data)
    })
  
})





function addNewAdvert(req, res, next) {

  // Fetch todays date to datestamp entry into database
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  if (req.body.date_seen === null) req.body.date_seen = date;

  // occupation, company, address, contact, correspondence, position, advert and contact values
  addOccupation(req.body)
    .then(data => addCompany(data))
    .then(data => addAddress(data))
    .then(data => addContacts(data))
    .then(data => addAdvert(data))
    .then(data => addAdvertContacts(data))
    .then(data => new Promise(function (res, rej) {
      Promise.all(data.contacts.map((contact, i) => {
        return addContactMethods(contact)
          .then(contact => {
            data.contacts[i] = contact
          })
      }))
        .then(() => {
          res(data)
        })
    }))
    .then(data => addSkills(data))
    .then(data => addRequirements(data))

    // .then(data => addCompany(data))
    .then(data => res.status(201).send(data))
    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });
  // .then(data => addCompany(data)).then(data => addAddress(data)).then(data => addContact(data)).then(data => addPosition(data)).then(data => addCorrespondence(data)).then(data => addAdvert(data))
  //   .then(data => {
  //     return Promise.all(data.contact_values.filter(value => !(value.value_id > 0)).map((value, index) => {
  //       return addContactValue(value)
  //     })).then(values => {
  //       return { ...data, contact_values: values }
  //     })
  //   })
  //   .then(data => res.status(201).send(data))
  //   .catch((error) => {
  //     console.log(error)
  //     return next({ status: 400, error: error })
  //   });

  // addNewPosition(req.body.)

  // postNewPosition(req.body.profession_id)
  //   .then(position => {
  //     postNewPosition_contact(req.body.contact_id, req.body.address_id, req.body.company_id, position.position_id)
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

  // profession, company, address, contact, correspondence, position, advert and contact values
  addProfession(req.body).then(data => addCompany(data)).then(data => addAddress(data)).then(data => addContact(data)).then(data => updatePosition(data)).then(data => updateCorrespondence(data)).then(data => updateAdvert(data))
    .then(data => {
      return Promise.all(data.contact_values.filter(value => !(value.value_id > 0)).map((value, index) => {
        return addContactValue(value)
      })).then(values => {
        return { ...data, contact_values: values }
      })
    })
    .then(data => {
      return res.status(200).send(data)
    })
    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });

  // addNewPosition(req.body.)

  // postNewPosition(req.body.profession_id)
  //   .then(position => {
  //     postNewPosition_contact(req.body.contact_id, req.body.address_id, req.body.company_id, position.position_id)
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

const updatePosition = (data) => new Promise(function (res, rej) {
  putPositionById(data.position_id, data.profession_id, data.position_title)
    .then(position => res({ ...data, ...position }))
})

const updateAdvert = (data) => new Promise(function (res, rej) {
  putAdvertById(data.advert_id, data.advert_ref, data.contract_type, data.full_time_part_time, data.date_posted, data.date_seen, data.closing_date, data.live, data.advert_url, data.min_salary, data.max_salary, data.advert_description, data.agency, data.job_board, data.voluntary, data.job_location)
    .then(advert => res({ ...data, ...advert }))
    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })

    })

})

const updateCorrespondence = (data) => new Promise(function (res, rej) {
  putPosition_contactById(data.correspondence_id, data.contact_id, data.address_id, data.company_id)
    .then(correspondence => res({ ...data, ...correspondence }))

});


// function updateAdvertById(req, res, next) {

//   // putPositionById(req.body.position_id, req.body.profession_id)
//   //   .then(position => {
//   //     putPosition_contactById(req.body.correspondence_id, req.body.contact_id, req.body.address_id, req.body.company_id)
//   //   })
//   //   .then(correspondence => {
//   putAdvertById(req.params.advert_id, req.body.job_title, req.body.advert_ref, req.body.contract_type, req.body.full_time_part_time, req.body.date_posted, req.body.closing_date, req.body.live, req.body.advert_url, req.body.min_salary, req.body.max_salary, req.body.advert_description, req.body.agency, req.body.job_board, req.body.voluntary, req.body.job_location, req.body.applied)
//     .then(data => {
//       res.status(200).send(data)
//     })
//     .catch((error) => {
//       console.log(error)
//       next({ status: 400, error: error })
//     });
//   // })


// }

function fetchAllAdverts(req, res, next) {
  getAllAdverts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchAllRequirements(req, res, next) {
  getAllRequirements()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchAdvertContactsByAdvertId(req, res, next) {
  getAdvertContactsByAdvertId(req.params.advert_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchAllAdvertsRaw(req, res, next) {
  getAllAdvertsRaw()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchLiveAdverts(req, res, next) {
  getLiveAdverts()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchRequirementsByAdvertId(req, res, next) {
  getRequirementsByAdvertId(req.params.advert_id)
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }));
}

function fetchAdvertById(req, res, next) {
  getAdvertById(req.params.advert_id)
    .then(data => {

      return res.status(200).send(data)
    })
    .catch((error) => next({ status: 404, error: error }))
}

module.exports = { addRequirements, fetchRequirementsByAdvertId, fetchAllRequirements, fetchAdvertContactsByAdvertId, addAdvertContacts, fetchAllAdvertsRaw, updateAdvert, updatePosition, addNewAdvert, addAdvert, fetchAllAdverts, fetchLiveAdverts, fetchAdvertById, updateAdvertById };

