const { expect } = require('chai');

const { getAdvertById, getAllAdvertContacts, getAllAdverts, getLiveAdverts, postNewAdvert, putAdvertById } = require('../../models/db.adverts');

const getdata = {

    getAdvertById: {
        advert_id: 1
    },
    getAllAdvertContacts: {
        advert_id: 1
    }

}

const postdata = {
    postNewAdvert: {
        occupation_id: 1,
        company_id: 1,
        address_id: 1,
        position_title: 'Admin Engineer',
        advert_ref: 'ABC123',
        contract_type: 'Semi-perm',
        contract_hours: 'part-time',
        date_posted: '01-13-2018',
        date_seen: null,
        closing_date: null,
        advert_url: 'www.w.w.com',
        min_salary: '',
        max_salary: '',
        advert_description: 'This is a test',
        agency: false,
        job_board: '',
        voluntary: false,
        job_location: 'here'
    }
}

const putdata = {
    putAdvertById: {
        advert_id: 2, 
        occupation_id: 2,
        company_id: 2, 
        address_id: 2,
        position_title: 'Office Senior Administrator', 
        advert_ref: '456123',
        contract_type: '',
        contract_hours: '',
        date_posted: null,
        date_seen: null,
        closing_date: null,
        live: false,
        advert_url: '',
        min_salary: '',
        max_salary: '',
        advert_description: '',
        agency: false,
        job_board: '',
        voluntary: false,
        job_location: ''
    }
}


getAllAdverts.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(7);
    expect(result[0].advert_ref).to.equal('REC/19/06732');
    expect(result[0].company_name).to.equal('Devon County Council')
}

getLiveAdverts.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(6);
    expect(result[0].advert_ref).to.equal('REC/19/06732');
    expect(result[0].company_name).to.equal('Devon County Council')
}

getAdvertById.getdata = () => getdata.getAdvertById;

getAdvertById.testresult = (result) => {
    expect(result).to.be.an('object');
    expect(result.advert_ref).to.equal('REC/19/06732');
    expect(result.company_name).to.equal('Devon County Council')
}

getAllAdvertContacts.getdata = () => getdata.getAllAdvertContacts;

getAllAdvertContacts.testresult = (result) => {
    const data = getdata.getAllAdvertContacts;
    expect(result).to.be.an('array');
    expect(result[0].advert_id).to.equal(data.advert_id)
    expect(result[0].contact_id).to.equal(1);
    expect(result[0].contact_name).to.equal('Ray Rimes')
}

postNewAdvert.postdata = () => postdata.postNewAdvert;

postNewAdvert.testresult = (result) => {
    const data = postdata.postNewAdvert;
    expect(result).to.be.an('object');
    expect(result.advert_id).to.equal(8)
    expect(result.advert_ref).to.equal(data.advert_ref);
    expect(result.advert_description).to.equal(data.advert_description)
}

putAdvertById.putdata = () => putdata.putAdvertById;

putAdvertById.testresult = (result) => {
    const data = putdata.putAdvertById;
    expect(result).to.be.an('object');
    expect(result.advert_id).to.equal(data.advert_id)
    expect(result.advert_ref).to.equal(data.advert_ref);
    expect(result.live).to.equal(data.live)
}


// getCompanyList.testresult = (result) => {
//     expect(result).to.be.an('array');
//     expect(result.length).to.equal(4);
//     expect(result[0].company_name).to.equal('Devon County Council')
//     expect(result[0].industry).to.equal(undefined)
// }

// getAddressById.getdata = () => getdata.getAddressById

// getAddressById.testresult = (result) => {
//     const data = getdata.getAddressById
//     expect(result).to.be.an('object');
//     expect(result.company_id).to.equal(2)
//     expect(result.postcode).to.equal('EX4 8NS')
// }

// getLiveAddressesByCompanyId.getdata = () => getdata.getLiveAddressesByCompanyId;

// getLiveAddressesByCompanyId.testresult = (result) => {
//     const data = getdata.getLiveAddressesByCompanyId
//     expect(result).to.be.an('array');
//     expect(result[0].company_id).to.equal(data.company_id)
//     expect(result[0].postcode).to.equal('EX4 8NS')
// }

// postNewAddress.postdata = () => postdata.postNewAddress;

// postNewAddress.testresult = (result) => {
//     const data = postdata.postNewAddress;
//     expect(result).to.be.an('object');
//     expect(result.address_id).to.equal(5);
//      expect(result.company_id).to.equal(data.company_id);
//     expect(result.address_field).to.equal(data.address_field);
// }

// putAddressById.putdata = () => putdata.putAddressById

// putAddressById.testresult = (result) => {
//     const data = putdata.putAddressById
//     expect(result).to.be.an('object');
//     expect(result.address_id).to.equal(data.address_id)
//     expect(result.address_field).to.equal(data.address_field)
//     expect(result.postcode).to.equal(data.postcode)
// }




module.exports = { getAllAdverts, getLiveAdverts, getAdvertById, getAllAdvertContacts, postNewAdvert, putAdvertById } 
