const { expect } = require('chai');

const { getOccupationList, getOccupations, postNewOccupation, putOccupationById } = require('../../models/db.occupations');

const getdata = {


}

const postdata = {
    postNewOccupation: {
        occupation_id: 6,
        occupation: 'Accountant',
        occupation_profile: 'A occupational accountant who really, does not want to be a lion tamer'
    },
    occupationNotExist: {
        occupation_id: null,
        occupation: 'Lion Tamer',
        occupation_profile: 'After a long career as an accountant, I would like to be a lion tamer'
    },
    occupationExist: {
        occupation_id: 1,
        occupation: 'finance',
        occupation_profile: ''
    }

}

const putdata = {
    putOccupationById: {
        occupation_id: 2,
        occupation: 'administration',
        occupation_profile: 'The best member of the Administration team I could ever be for you. You would be fool not to employ me'
    }
}


getOccupations.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(5);
    expect(result[0].occupation).to.equal('finance')
    expect(result[1].occupation_profile).to.equal('A fine member of the administration team, I would make an excellent candidate')
}

getOccupationList.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(5);
    expect(result[0].occupation).to.equal('finance')
    expect(result[1].occupation_profile).to.equal(undefined)
}

postNewOccupation.postdata = () => postdata.postNewOccupation

postNewOccupation.testresult = (result) => {
    const data = postdata.postNewOccupation
    expect(result).to.be.an('object');
    expect(result.occupation_id).to.equal(data.occupation_id);
    expect(result.occupation).to.equal(data.occupation);
}

putOccupationById.putdata = () => putdata.putOccupationById;

putOccupationById.testresult = (result) => {
    const data = putdata.putOccupationById;
    expect(result).to.be.an('object');
    expect(result.occupation_id).to.equal(data.occupation_id)
    expect(result.occupation).to.equal(data.occupation)
    expect(result.occupation_profile).to.equal(data.occupation_profile)
}


module.exports = { getOccupationList, getOccupations, postNewOccupation, putOccupationById } 
