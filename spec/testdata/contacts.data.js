const { expect } = require('chai');

const { getAllContactMethods, getContactsByAddressId, getLiveContactsByAddressId, getLiveContactsByCompanyId, getContactById, getAllContacts, getContactMethodsById, getContactsByCompanyId, getLiveContactsByCompanyAndAddressId, getContactsByCompanyAndAddressId, postContactMethod, postNewContact, putContactById } = require('../../models/db.contacts');

getAllContacts.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(1);
    expect(result[data.index].contact_name).to.equal(data.contact_name);
}

getContactById.testresult = (result, data) => {

    expect(result).to.be.an('array');
    expect(result[data.index].contact_id).to.equal(data.contact_id)
    expect(result[data.index].contact_name).to.equal('Ray Rimes')
}

getContactsByCompanyId.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length)
    expect(result[data.index].company_id).to.equal(data.company_id)
    expect(result[data.index].contact_name).to.equal(data.contact_name)
}

getLiveContactsByCompanyId.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length)
    expect(result[data.index].company_id).to.equal(data.company_id)
    expect(result[data.index].contact_name).to.equal(data.contact_name)
}

getContactsByAddressId.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length)
    expect(result[data.index].address_id).to.equal(data.address_id)
    expect(result[data.index].contact_name).to.equal(data.contact_name)
}

getLiveContactsByAddressId.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length)
    expect(result[data.index].address_id).to.equal(data.address_id)
    expect(result[data.index].contact_name).to.equal(data.contact_name)
}

getContactsByCompanyAndAddressId.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length)
    expect(result[data.index].company_id).to.equal(data.company_id)
    expect(result[data.index].address_id).to.equal(data.address_id)
    expect(result[data.index].contact_name).to.equal(data.contact_name)
}

getLiveContactsByCompanyAndAddressId.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length)
    expect(result[data.index].company_id).to.equal(data.company_id)
    expect(result[data.index].address_id).to.equal(data.address_id)
    expect(result[data.index].contact_name).to.equal(data.contact_name)
}

postNewContact.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.address_id).to.equal(data.address_id);
    expect(result.contact_id).to.be.an('number');
    expect(result.contact_name).to.equal(data.contact_name);
}

putContactById.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.address_id).to.equal(data.address_id);
    expect(result.contact_id).to.equal(data.contact_id);
    expect(result.contact_name).to.equal(data.contact_name);
}

getAllContactMethods.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length);
    expect(result[data.index].contact_method).to.equal(data.contact_method);
}

getContactMethodsById.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length);
    expect(result[data.index].contact_method).to.equal(data.contact_method);
}

postContactMethod.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.contact_id).to.equal(data.contact_id)
    expect(result.contact_method).to.equal(data.contact_method)
    expect(result.contact_value).to.equal(data.contact_value)
}

module.exports = {getLiveContactsByCompanyAndAddressId, getLiveContactsByCompanyId, getContactsByAddressId, getLiveContactsByAddressId, putContactById, getAllContactMethods, getContactById, getAllContacts, getContactMethodsById, getContactsByCompanyId, getContactsByCompanyAndAddressId, postContactMethod, postNewContact } 
