const { expect } = require('chai');

const { getAddressById, getAllAddresses, getLiveAddressesByCompanyId, putAddressById, postNewAddress } = require('../../models/db.addresses');

getAllAddresses.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(4);
    expect(result[data.index].address_field).to.equal(data.address_field);
    expect(result[data.index].postcode).to.equal(data.postcode);
}

getAddressById.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.company_id).to.equal(data.company_id)
    expect(result.postcode).to.equal(data.postcode)
}

getLiveAddressesByCompanyId.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result[data.index].company_id).to.equal(data.company_id)
    expect(result[data.index].postcode).to.equal(data.postcode)
    expect(result[data.index].live).to.equal(true)
}

postNewAddress.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.address_id).to.be.an('number');
     expect(result.company_id).to.equal(data.company_id);
    expect(result.address_field).to.equal(data.address_field);
    expect(result.postcode).to.equal(data.postcode);
}

putAddressById.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.address_id).to.equal(data.address_id)
    expect(result.address_field).to.equal(data.address_field)
    expect(result.postcode).to.equal(data.postcode)
}




module.exports = { getAddressById, getAllAddresses, getLiveAddressesByCompanyId, putAddressById, postNewAddress } 
