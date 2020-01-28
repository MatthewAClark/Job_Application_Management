const { expect } = require('chai');

const { getAddressById, getAllAddresses, getLiveAddressesByCompanyId, putAddressById, postNewAddress } = require('../../models/db.addresses');

const getdata = {

    getAddressById: {
        address_id: 2
    },
    getLiveAddressesByCompanyId: {
        company_id: 2
    }
}

const postdata = {
    postNewAddress: {
        company_id: 1,
        address_field: '1 Flabba Dabba Road\\n Exmouth\\n Devon',
        postcode: 'EX20 4BQ'
    }
}

const putdata = {
    putAddressById: {
        address_id: 2, 
        company_id: 2, 
        address_field: 'First Floor Office\n8 Sandpiper Court\nHarrington Lane\nExeter',
        postcode: 'EX5 8NS', 
        live: true
    }
}


getAllAddresses.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(4);
    expect(result[0].address_field).to.equal('Great Moor House\\nExeter\\nDevon');
    expect(result[0].postcode).to.equal('EX2 7NN');
}

// getCompanyList.testresult = (result) => {
//     expect(result).to.be.an('array');
//     expect(result.length).to.equal(4);
//     expect(result[0].company_name).to.equal('Devon County Council')
//     expect(result[0].industry).to.equal(undefined)
// }

getAddressById.getdata = () => getdata.getAddressById

getAddressById.testresult = (result) => {
    const data = getdata.getAddressById
    expect(result).to.be.an('object');
    expect(result.company_id).to.equal(2)
    expect(result.postcode).to.equal('EX4 8NS')
}

getLiveAddressesByCompanyId.getdata = () => getdata.getLiveAddressesByCompanyId;

getLiveAddressesByCompanyId.testresult = (result) => {
    const data = getdata.getLiveAddressesByCompanyId
    expect(result).to.be.an('array');
    expect(result[0].company_id).to.equal(data.company_id)
    expect(result[0].postcode).to.equal('EX4 8NS')
}

postNewAddress.postdata = () => postdata.postNewAddress;

postNewAddress.testresult = (result) => {
    const data = postdata.postNewAddress;
    expect(result).to.be.an('object');
    expect(result.address_id).to.equal(5);
     expect(result.company_id).to.equal(data.company_id);
    expect(result.address_field).to.equal(data.address_field);
}

putAddressById.putdata = () => putdata.putAddressById

putAddressById.testresult = (result) => {
    const data = putdata.putAddressById
    expect(result).to.be.an('object');
    expect(result.address_id).to.equal(data.address_id)
    expect(result.address_field).to.equal(data.address_field)
    expect(result.postcode).to.equal(data.postcode)
}




module.exports = { getAddressById, getAllAddresses, getLiveAddressesByCompanyId, putAddressById, postNewAddress } 
