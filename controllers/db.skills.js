
const { getAllSkills, postNewSkill, getListSkills } = require('../models/db.skills');



function addNewSkill(req, res, next) {



  // Add new company address into db
  postNewSkill(req.body.skill_name, req.body.description_long, req.body.description_short)

    .then(data => res.status(201).send(
      data))

    .catch((error) => {
      console.log(error)
      return next({ status: 400, error: error })
    });
}

const addSkills = (data) => new Promise(function (res, rej) {
  Promise.all(data.skills.map((skill, i) => {
    if (skill.skill_id === null) {
      return postNewSkill(skill.skill_name, skill.description_long, skill.description_short)
        .then(skill => {
           var skills = data.skills
          skills[i] = skill
          data = { ...data, skills: skills }
        })
    }

  }))
    .then(() => res(data))
})

function fetchAllSkills(req, res, next) {
  getAllSkills()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

function fetchListSkills(req, res, next) {
  getListSkills()
    .then(data => res.status(200).send(data))
    .catch((error) => next({ status: 404, error: error }))
}

module.exports = { addSkills, fetchAllSkills, addNewSkill, fetchListSkills };

