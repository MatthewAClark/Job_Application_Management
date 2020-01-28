const { expect } = require('chai');

const { getAllCompanies, getCompanyList, getCompanyById, postNewCompany, putCompanyById } = require('../../models/db.companies');

const getdata = {
    
    getCompanyById: {
        company_id: 1
    } 
}

const postdata = {
    postNewCompany: {
        company_name: 'A N Other company ltd', 
        company_sector: 'Another sector', 
        industry: 'Another Industry', 
        website: 'www.anotherwebsite.com'
    }
}

const putdata = {
    putCompanyById: {
        company_id: 1,
        company_name: 'Cornwall County Council', 
        company_sector: 'government', 
        industry: 'Public Authority', 
        website: 'www.cornwall.ac.uk'
    }
}


getAllCompanies.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(4);
    expect(result[0].company_name).to.equal('Devon County Council')
    expect(result[0].industry).to.equal('government')
}

getCompanyList.testresult = (result) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(4);
    expect(result[0].company_name).to.equal('Devon County Council')
    expect(result[0].industry).to.equal(undefined)
}

getCompanyById.getdata = () => getdata.getCompanyById



getCompanyById.testresult = (result) => {
    const data = getdata.getCompanyById
    expect(result).to.be.an('object');
    expect(result.company_name).to.equal('Devon County Council')
    expect(result.company_id).to.equal(data.company_id)
}

postNewCompany.postdata = () => postdata.postNewCompany

postNewCompany.testresult = (result) => {
    const data = postdata.postNewCompany
    expect(result).to.be.an('object');
    expect(result.company_id).to.equal(5);
    expect(result.company_name).to.equal(data.company_name);
}

putCompanyById.putdata = () => putdata.putCompanyById;

putCompanyById.testresult = (result) => {
    const data = putdata.putCompanyById;
    expect(result).to.be.an('object');
    expect(result.company_id).to.equal(data.company_id)
    expect(result.company_name).to.equal(data.company_name)
    expect(result.website).to.equal(data.website)
}


module.exports = { getCompanyById, getAllCompanies, getCompanyList, putCompanyById, postNewCompany} 
