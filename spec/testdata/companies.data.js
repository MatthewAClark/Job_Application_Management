const { expect } = require('chai');

const { getAllCompanies, getCompanyList, getCompanyById, postNewCompany, putCompanyById } = require('../../models/db.companies');

getAllCompanies.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(4);
    expect(result[data.index].company_name).to.equal(data.company_name)
    expect(result[data.index].industry).to.equal(data.industry)
}

getCompanyList.testresult = (result, data) => {
    expect(result).to.be.an('array');
    expect(result.length).to.equal(4);
    expect(result[data.index].company_name).to.equal(data.company_name)
    expect(result[data.index].industry).to.equal(undefined)
}


getCompanyById.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.company_name).to.equal(data.company_name)
    expect(result.company_id).to.equal(data.company_id)
}

postNewCompany.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.company_id).to.be.an('number');
    expect(result.company_name).to.equal(data.company_name);
}

putCompanyById.testresult = (result, data) => {
    expect(result).to.be.an('object');
    expect(result.company_id).to.equal(data.company_id)
    expect(result.company_name).to.equal(data.company_name)
    expect(result.website).to.equal(data.website)
}


module.exports = { getCompanyById, getAllCompanies, getCompanyList, putCompanyById, postNewCompany} 
