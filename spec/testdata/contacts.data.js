const { expect } = require('chai');

const { getAllContactMethods, getContactsByAddressId, getLiveContactsByAddressId, getLiveContactsByCompanyId, getContactById, getAllContacts, getContactMethodsById, getContactsByCompanyId, getLiveContactsByCompanyAndAddressId, getContactsByCompanyAndAddressId, postContactMethod, postNewContact, putContactById } = require('../../models/db.contacts');

const getdata = {

    getContactById: {
        contact_id: 1
    },
    getContactMethodsById: {
        contact_id: 1
    },
    getContactsByCompanyId: {
        company_id: 1
    },
    getContactsByAddressId: {
        address_id: 1
    },
    getLiveContactsByAddressId: {
        address_id: 1
    },
    getLiveContactsByCompanyId: {
        company_id: 1
    },
    getContactsByCompanyAndAddressId: {
        company_id: 1,
        address_id: 1
    },
    getLiveContactsByCompanyAndAddressId: {
        company_id: 1,
        address_id: 1
    }
}

const postdata = {
    postNewContact: {
        company_id: 1,
        address_id: 1,
        contact_name: 'Wilma Flintstone',
        contact_position: 'House Wife',
        capacity_known: 'Fred',
        reference: true,
        date_known: null
    },
    postContactMethod: {
        contact_id: 1,
        contact_method: 'fax',
        contact_value: '9876543210'
    }
}

const putdata = {
    putContactById: {
        contact_id: 1,
        company_id: 1,
        address_id: 1,
        contact_name: 'Barny Rubble',
        contact_position: '',
        capacity_known: 'Fred',
        reference: true,
        date_known: null,
        live: true
    }
}


getAllContacts.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(1);
    expect(result[0].contact_name).to.equal('Ray Rimes');
}

getContactById.getdata = () => getdata.getContactById

getContactById.testresult = (result) => {
    const data = getdata.getContactById
    expect(result).to.be.an('array');
    expect(result[0].contact_id).to.equal(data.contact_id)
    expect(result[0].contact_name).to.equal('Ray Rimes')
}

getContactsByAddressId.getdata = () => getdata.getContactsByAddressId

getContactsByAddressId.testresult = (result) => {
    const data = getdata.getContactsByAddressId
    expect(result).to.be.an('array');
    expect(result.length).to.equal(1)
    expect(result[0].address_id).to.equal(1)
    expect(result[0].contact_name).to.equal('Ray Rimes')
}

getContactsByCompanyId.getdata = () => getdata.getContactsByCompanyId

getContactsByCompanyId.testresult = (result) => {
    const data = getdata.getContactsByCompanyId
    expect(result).to.be.an('array');
    expect(result.length).to.equal(1)
    expect(result[0].company_id).to.equal(1)
    expect(result[0].contact_name).to.equal('Ray Rimes')
}

getContactsByCompanyAndAddressId.getdata = () => getdata.getContactsByCompanyAndAddressId

getContactsByCompanyAndAddressId.testresult = (result) => {
    const data = getdata.getContactsByCompanyAndAddressId
    expect(result).to.be.an('array');
    expect(result.length).to.equal(1)
    expect(result[0].company_id).to.equal(1)
    expect(result[0].address_id).to.equal(1)
    expect(result[0].contact_name).to.equal('Ray Rimes')
}

getLiveContactsByCompanyAndAddressId.getdata = () => getdata.getLiveContactsByCompanyAndAddressId

getLiveContactsByCompanyAndAddressId.testresult = (result) => {
    const data = getdata.getLiveContactsByCompanyAndAddressId
    expect(result).to.be.an('array');
    expect(result.length).to.equal(1)
    expect(result[0].company_id).to.equal(1)
    expect(result[0].address_id).to.equal(1)
    expect(result[0].contact_name).to.equal('Ray Rimes')
}

getLiveContactsByCompanyId.getdata = () => getdata.getLiveContactsByCompanyId

getLiveContactsByCompanyId.testresult = (result) => {
    const data = getdata.getLiveContactsByCompanyId
    expect(result).to.be.an('array');
    expect(result.length).to.equal(1)
    expect(result[0].company_id).to.equal(1)
    expect(result[0].contact_name).to.equal('Ray Rimes')
}

getLiveContactsByAddressId.getdata = () => getdata.getLiveContactsByAddressId

getLiveContactsByAddressId.testresult = (result) => {
    const data = getdata.getLiveContactsByAddressId
    expect(result).to.be.an('array');
    expect(result.length).to.equal(1)
    expect(result[0].address_id).to.equal(1)
    expect(result[0].contact_name).to.equal('Ray Rimes')
}

postNewContact.postdata = () => postdata.postNewContact

postNewContact.testresult = (result) => {
    const data = postdata.postNewContact;
    expect(result).to.be.an('object');
    expect(result.address_id).to.equal(data.address_id);
    expect(result.contact_id).to.be.an('number');
    expect(result.contact_name).to.equal(data.contact_name);
}

putContactById.putdata = () => putdata.putContactById;

putContactById.testresult = (result) => {
    const data = putdata.putContactById;
    expect(result).to.be.an('object');
    expect(result.address_id).to.equal(data.address_id);
    expect(result.contact_id).to.equal(1);
    expect(result.contact_name).to.equal(data.contact_name);
}

getAllContactMethods.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(2);
    expect(result[0].contact_method).to.equal('Email');
}

getContactMethodsById.getdata = () => getdata.getContactMethodsById

getContactMethodsById.testresult = (result) => {
    const data = getdata.getContactMethodsById
    expect(result).to.be.an('array');
    expect(result.length).to.equal(2);
    expect(result[0].contact_method).to.equal('Email');
}

postContactMethod.postdata = () => postdata.postContactMethod;

postContactMethod.testresult = (result) => {
    const data = postdata.postContactMethod
    expect(result).to.be.an('object');
    expect(result.contact_id).to.equal(data.contact_id)
    expect(result.contact_method).to.equal(data.contact_method)
    expect(result.contact_value).to.equal(data.contact_value)
}

// getLiveAddressesByCompanyId.getdata = () => getdata.getLiveAddressesByCompanyId;

// getLiveAddressesByCompanyId.testresult = (result) => {
//     const data = getdata.getLiveAddressesByCompanyId
//     expect(result).to.be.an('array');
//     expect(result[0].company_id).to.equal(data.company_id)
//     expect(result[0].postcode).to.equal('EX4 8NS')
// }

// postNewAddress.postdata = () => postdata.postNewAddress;



// putAddressById.putdata = () => putdata.putAddressById

// putAddressById.testresult = (result) => {
//     const data = putdata.putAddressById
//     expect(result).to.be.an('object');
//     expect(result.address_id).to.equal(data.address_id)
//     expect(result.address_field).to.equal(data.address_field)
//     expect(result.postcode).to.equal(data.postcode)
// }




module.exports = {getLiveContactsByCompanyAndAddressId, getLiveContactsByCompanyId, getContactsByAddressId, getLiveContactsByAddressId, putContactById, getAllContactMethods, getContactById, getAllContacts, getContactMethodsById, getContactsByCompanyId, getContactsByCompanyAndAddressId, postContactMethod, postNewContact } 
