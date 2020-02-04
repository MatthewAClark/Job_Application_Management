const { expect } = require('chai');

const { getAdvertById, getAllAdvertContacts, getAllAdverts, getLiveAdverts, postNewAdvert, putAdvertById, postAdvertContact } = require('../../models/db.adverts');


getAllAdverts.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length);
    expect(result[data.index].advert_ref).to.equal(data.advert_ref);
    expect(result[data.index].company_name).to.equal(data.company_name)
}

getLiveAdverts.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(data.length);
    expect(result[data.index].advert_ref).to.equal(data.advert_ref);
    expect(result[data.index].company_name).to.equal(data.company_name)
}

getAdvertById.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.advert_ref).to.equal(data.advert_ref);
    expect(result.company_name).to.equal(data.company_name)
}


getAllAdvertContacts.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result[data.index].advert_id).to.equal(data.advert_id)
    expect(result[data.index].contact_id).to.equal(data.contact_id);
    expect(result[data.index].contact_name).to.equal(data.contact_name)
}

postNewAdvert.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.advert_id).to.equal(8)
    expect(result.advert_ref).to.equal(data.advert_ref);
    expect(result.advert_description).to.equal(data.advert_description)
}

postAdvertContact.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.advert_id).to.equal(data.advert_id)
    expect(result.contact_id).to.equal(data.contact_id);
}

putAdvertById.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.advert_id).to.equal(data.advert_id)
    expect(result.advert_ref).to.equal(data.advert_ref);
    expect(result.live).to.equal(data.live)
}

module.exports = {postAdvertContact, getAllAdverts, getLiveAdverts, getAdvertById, getAllAdvertContacts, postNewAdvert, putAdvertById } 
