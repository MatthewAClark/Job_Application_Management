const { expect } = require('chai');

const { getOccupationList, getOccupations, postNewOccupation, putOccupationById } = require('../../models/db.occupations');

getOccupations.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length);
    expect(result[data.index].occupation).to.equal(data.occupation)
    expect(result[data.index].occupation_profile).to.equal(data.occupation_profile)
}

getOccupationList.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length);
    expect(result[data.index].occupation).to.equal(data.occupation)
    expect(result[data.index].occupation_profile).to.equal(undefined)
}

postNewOccupation.testresult = (result, testdata) => {
    
    expect(result).to.be.an('object');
    expect(result.occupation_id).to.equal(testdata.occupation_id);
    expect(result.occupation).to.equal(testdata.occupation);
}

putOccupationById.testresult = (result, testdata) => {
    
    expect(result).to.be.an('object');
    expect(result.occupation_id).to.equal(testdata.occupation_id)
    expect(result.occupation).to.equal(testdata.occupation)
    expect(result.occupation_profile).to.equal(testdata.occupation_profile)
}




module.exports = {getOccupationList, getOccupations, postNewOccupation, putOccupationById } 
