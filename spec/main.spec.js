/* eslint-disable no-console*/

// MVC test spec for Career Management Application
// This file tests each component developed during this project for TDD

// Set node environment for testing and load in necessary modules
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');

// Import required model components
// const { getAllAdverts, getLiveAdverts, postNewAdvert, getAdvertById, putAdvertById } = require('../models/db.adverts');

// const {getAllApplications} = require ('../models/db.applications');

const {occupations} = require('./components/occupations.spec');
const {companies} = require('./components/companies.spec');
const {addresses} = require('./components/addresses.spec');
const {contacts} = require('./components/contacts.spec');
const {adverts} = require('./components/adverts.spec');
const {skill} = require('./components/skills.spec');
const {applications} = require('./components/applications.spec');

const {controlleradverts} = require('./controllers/adverts.spec')

describe('occupations test', () => occupations());
describe('companies test', () => companies());
describe('addresses test', () => addresses());
describe('contacts test', () => contacts());
describe.only('advert test', () => adverts());
describe('advert controller test', () => controlleradverts());
describe('skills test', () => skill());
describe('applications test', () => applications());


// describe('Adverts', () => {

//   describe('Model testing', () => {
//     describe('Adverts table', () => {
//       it('../models/adverts, Fetches all adverts', () => {
//         return getAllAdverts()
//           .then(result => {
//             expect(result).to.be.an('array');
//             expect(result.length).to.equal(2);
//             expect(result[0].advert_ref).to.equal('abc123');
//           })
//       })

//       it('../models/adverts, Fetches live adverts only', () => {
//         return getLiveAdverts()
//           .then(result => {
//             expect(result).to.be.an('array');
//             expect(result.length).to.equal(1);
//             expect(result[0].advert_ref).to.equal('def456');
//           })
//       })

//       it('../models/adverts, Posts an advert', () => {
//         return postNewAdvert('Test Company Ltd', 'Test job', 'test123', '', '', null, null, null, '', '', '', 'This is a test', true, 'test', false, 'test location')
//           .then(result => {
//             expect(result).to.be.an('Object');
//             expect(result.advert_ref).to.equal('test123');
//           })
//       })

//       it('../models/adverts, Updates an advert', () => {
//         return putAdvertById(1, 'Another test company', 'Test job 2', 'test456', '', '', null, null, false, '', '', '', 'This is another test', true, 'test', false, 'test location 2')
//           .then(result => {
//             expect(result).to.be.an('Object');
//             expect(result.advert_ref).to.equal('test456');
//           })
//       })

//       it('../models/adverts, Get an advert by Id', () => {
//         return getAdvertById(2)
//           .then(result => {
//             expect(result).to.be.an('Object');
//             expect(result.advert_ref).to.equal('def456');
//           })
//       })
//     });

//     describe.only('Applications table', () => {
//       it('../models/applications, Fetches all applications', () => {
//         return getAllApplications()
//           .then(result => {
//             expect(result).to.be.an('array');
//             expect(result.length).to.equal(1);
//             expect(result[0].application_id).to.equal(1);
//           })
//       })
//     });
//   })

//   describe('API testing', () => {

//     // adverts table
//     it('../api/adverts, Fetches all adverts', () => {

//       return request(app) // run mock server
//         .get('/api/adverts')
//         .expect(200)
//         .then(res => {

//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(2);
//           expect(res.body[0].advert_ref).to.equal('abc123');
//         });

//     });

//     it('../api/adverts, Fetches live adverts', () => {

//       return request(app) // run mock server
//         .get('/api/adverts/live')
//         .expect(200)
//         .then(res => {

//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].advert_ref).to.equal('def456');
//         });

//     });

//     it('../api/adverts/:id, Fetches advert by id', () => {

//       return request(app) // run mock server
//         .get('/api/adverts/2')
//         .expect(200)
//         .then(res => {

//           expect(res.body).to.be.an('object')
//           expect(res.body.advert_ref).to.equal('def456');
//         });

//     });

//     it('../api/adverts, Posts an advert to the db', () => {

//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/adverts/')
//         .send({
//           company_name: 'Test Company Ltd',
//           job_title: 'Test job',
//           advert_ref: 'test123',
//           contract_type: '',
//           full_time_part_time: '',
//           date_posted: null,
//           closing_date: null,
//           website: '',
//           min_salary: '',
//           max_salary: '',
//           advert_description: 'This is a test',
//           agency: true,
//           job_board: 'test',
//           voluntary: false,
//           job_location: 'test location'
//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           expect(res.body).to.be.an('Object');
//           expect(res.body.advert_ref).to.equal('test123')
//         })
//     })

//     it('../api/adverts, Updates an advert to the db', () => {

//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .put('/api/adverts/1')
//         .send({
//           company_name: 'Test Company Ltd',
//           job_title: 'Test job',
//           advert_ref: 'test789',
//           contract_type: '',
//           full_time_part_time: '',
//           date_posted: null,
//           closing_date: null,
//           live: false,
//           website: '',
//           min_salary: '',
//           max_salary: '',
//           advert_description: 'This is a test 2',
//           agency: true,
//           job_board: 'test',
//           voluntary: false,
//           job_location: 'test location'
//         })
//         // supertest expect  - key on promise object
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('Object');
//           expect(res.body.advert_id).to.equal(1)
//           expect(res.body.advert_ref).to.equal('test789')
//         })
//     })

//   })

// });

//   /// Post to the database

//   describe('Posts to the database', () => {
//     it('../models/companies, Posts a company to the db', () => {
//       const data = post.companies;
//       return postNewCompany(data.company_name, data.sector, data.industry, data.company_url)
//         .then(result => {
//           expect(result).to.be.an('Object')
//           expect(result.company_name).to.equal(data.company_name)
//         })
//     })




//   })
// })

// describe.only('data using API', () => {
//   describe('Gets data', () => {
//     it('Fetches all companies from our db', () => {
//       const companies = get.companies;
//       return request(app) // run mock server
//         .get('/api/companies')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(2);
//           expect(res.body[0].company_name).to.equal(companies[0].company_name);
//           expect(res.body[0].industry).to.equal(companies[0].industry);
//         });
//     });

//     // This is how the front end will work when adding an advert to the database
//     it('Fetches list of occupations from our db', () => {
//       const occupations = get.occupations;
//       return request(app) // run mock server
//         .get('/api/occupations/list')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].profession).to.equal(occupations.profession);
//           expect(res.body[0].profession_profile).to.equal(undefined);
//         });
//     });

//     it('Fetches all addresses from a particular company', () => {
//       const addresses = get.addresses;
//       return request(app) // run mock server
//         .get('/api/companies/addresses/1')
//         .expect(200)
//         .then(res => {

//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].town_city).to.equal(addresses[0].town_city);
//         });
//     });

//     it('Fetches all contacts from a particular address', () => {
//       const contacts = get.contacts;
//       return request(app) // run mock server
//         .get('/api/addresses/contacts/1')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].contact_name).to.equal(contacts[0].contact_name);
//         });
//     });
//   })

//   describe('POSTS', () => {
//     it('posts profession to the occupations table', () => {
//       const occupations = post.occupations
//        // runs mock server
//        return request(app)
//        //get request to mock server
//        .post('/api/occupations/')
//        .send(occupations)
//        // supertest expect  - key on promise object
//        .expect(201)
//        .then(res => {
//          // chai expect
//          expect(res.body).to.be.an('object');
//          expect(res.body.profession).to.equal(occupations.profession);

//        });

//     });

//     it('posts company to the companies table', () => {
//       const companies = post.companies
//        // runs mock server
//        return request(app)
//        //get request to mock server
//        .post('/api/companies/')
//        .send(companies)
//        // supertest expect  - key on promise object
//        .expect(201)
//        .then(res => {
//          // chai expect
//          expect(res.body).to.be.an('object');
//          expect(res.body.company_name).to.equal(companies.company_name);

//        });

//     });

//     it('posts company address', () => {
//       const addresses = post.addresses
//        // runs mock server
//        return request(app)
//        //get request to mock server
//        .post('/api/companies/address')
//        .send(addresses)
//        // supertest expect  - key on promise object
//        .expect(201)
//        .then(res => {
//          // chai expect

//          expect(res.body).to.be.an('object');
//          expect(res.body.postcode_zipcode).to.equal(addresses.postcode_zipcode);

//        });

//     });

//     it('posts contact details', () => {
//       const contacts = post.contacts
//        // runs mock server
//        return request(app)
//        //get request to mock server
//        .post('/api/contacts/')
//        .send(contacts)
//        // supertest expect  - key on promise object
//        .expect(201)
//        .then(res => {
//          // chai expect

//          expect(res.body).to.be.an('object');
//          expect(res.body.contact_name).to.equal(contacts.contact_name);

//        });

//     });
//   })

// })
















// // Addresses

// describe('../models/addresses', () => {
//   it('Fetches all addresses from db', () => {
//     const data = get.addresses
//     return getAllAddresses()
//       .then(result => {
//         expect(result).to.be.an('array');
//         expect(result.length).to.equal(3);
//         expect(result[0].town_city).to.equal(data.town_city);
//       })
//   })

//   it('Posts a new address to the db', () => {
//     const data = post.addresses
//     return postNewAddress(data.company_id, data.line_1, data.line_2, data.town_city, data.county_state, data.country, data.postcode_zipcode)
//       .then(result => {
//         //expect(result).to.be.an('array');
//         //expect(result.length).to.equal(2);
//         expect(result.company_id).to.equal(data.company_id)
//         expect(result.company_name).to.equal(data.company_name);
//       })
//   })
// })

// describe('../models/contacts', () => {
//   it('Fetches all contacts from db', () => {
//     const data = get.contacts
//     return getAllContacts()
//       .then(result => {
//         expect(result).to.be.an('array');
//         expect(result.length).to.equal(2);
//         expect(result[0].contact_name).to.equal(data[0].contact_name);
//       })
//   })

//   it('Posts a new contact to the db', () => {
//     const data = post.contacts
//     return postNewContact(data.address_id,
//       data.contact_name,
//       data.contact_title,
//       data.contact_position,
//       data.tel_number1,
//       data.tel_number2,
//       data.fax,
//       data.email,
//       data.contact_url,
//       data.reference,
//       data.date_known,
//       data.live)
//       .then(result => {
//         //expect(result).to.be.an('array');
//         //expect(result.length).to.equal(2);
//         expect(result.contact_name).to.equal(data.contact_name)
//         expect(result.address_id).to.equal(data.address_id);
//       })
//   })
// })

// describe('../models/personal', () => {
//   it('Fetches all personal info from db', () => {
//     const data = get.personal
//     return getAllPersonals()
//       .then(result => {
//         expect(result).to.be.an('array');
//         expect(result.length).to.equal(1);
//         expect(result[0].personal_name).to.equal(data.personal_name);
//       })
//   })

//   it('Posts a new personal to the db', () => {
//     const data = post.personal
//     return postNewPersonal(data.user_id,
//       data.contact_id,
//       data.personal_name,
//       data.additional_info,
//       data.personal_profile,
//       data.hobbies_interests,
//       data.ni_number
//     )
//       .then(result => {
//         //expect(result).to.be.an('array');
//         //expect(result.length).to.equal(2);
//         expect(result.contact_name).to.equal(data.contact_name)
//         expect(result.address_id).to.equal(data.address_id);
//       })
//   })
// })

// describe('../models/schools', () => {
//   it('Fetches all schools from db', () => {
//     const data = get.schools
//     return getAllSchools()
//       .then(result => {
//         expect(result).to.be.an('array');
//         expect(result.length).to.equal(1);
//         expect(result[0].school_name).to.equal(data.school_name);
//       })
//   })

//   it('Posts a new school to the db', () => {
//     const data = post.school
//     return postNewPersonal(data.user_id,
//       data.contact_id,
//       data.personal_name,
//       data.additional_info,
//       data.personal_profile,
//       data.hobbies_interests,
//       data.ni_number
//     )
//       .then(result => {
//         //expect(result).to.be.an('array');
//         //expect(result.length).to.equal(2);
//         expect(result.contact_name).to.equal(data.contact_name)
//         expect(result.address_id).to.equal(data.address_id);
//       })
//   })
// })



// // // ***************************** Controllers ************************

// // cGet = {req: {body: get}}
// // describe('All controller components', () => {
// //   describe('../controllers/companies', () => {
// //     const {addNewCompany, fetchAllCompanyNames, fetchAllCompanies} = require('../controllers/db.companies')

// //     it('Fetches all companies from db', () => {
// //       console.log(fetchAllCompanies())
// //         .then(result => {
// //           expect(result).to.be.an('array');
// //           expect(result.length).to.equal(1);
// //           expect(result[0].company_name).to.equal(cGet.company_name);
// //         })
// //     })

// //     it('Posts a new company to the db', () => {
// //       const s = {company_name: 'Sainsburys', sector: 'food', industry: 'retail', company_url: 'www.sainsburys.com'}
// //       addNewCompany(s.company_name, s.sector, s.industry, s.company_url)
// //         .then(result => {
// //           expect(result).to.be.an('array');
// //           expect(result.length).to.equal(2);
// //           expect(result[1].company_name).to.equal(s.company_name);
// //         })
// //     })
// //   })
// // })

// const addNewAdvert = require('../controllers/db.advert').addNewAdvert;


// // Test the database 


// // db API GET request endpoint test

// describe('db api endpoints', () => {

//   // Companies
//   describe('/api/companies', () => {
//     // Fetch all companies listed in DB
//     it('Fetches all companies from our db', () => {
//       return request(app) // run mock server
//         .get('/api/companies')
//         .expect(200)
//         .then(res => {

//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(2);
//           expect(res.body[0].company_name).to.equal('A Software Company');
//         });
//     });

//     it('POSTs an company to the database', () => {
//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/companies')
//         .send({


//           company_name: 'Matthew Software Ltd',
//           sector: 'Software',
//           industry: 'Engineering',
//           company_url: 'www.matthewaclark.co.uk'


//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           // chai expect
//           expect(res.body).to.be.an('object');
//           expect(res.body.company_id).to.equal(2);
//           expect(res.body.company_name).to.equal('Matthew Software Ltd');

//         });
//     });

//   });

//   // Addresses
//   describe('/api/addresses', () => {
//     // Fetch all addresses listed in DB
//     it('Fetches all addresses from our db', () => {
//       return request(app) // run mock server
//         .get('/api/addresses')
//         .expect(200)
//         .then(res => {
//           console.log('address' + res.body)
//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].town_city).to.equal('Exeter');
//         });
//     });

//     it('POSTs an address to the database', () => {
//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/addresses')
//         .send({
//           company_id: 1,
//           line_1: '1234 Another Road',
//           line_2: 'Another Suburb',
//           town_city: 'Plymouth',
//           county_state: 'Devon',
//           country: 'UK',
//           postcode_zipcode: 'PL1 1PL',

//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           // chai expect
//           expect(res.body).to.be.an('object');
//           expect(res.body.address_id).to.equal(2);
//           expect(res.body.town_city).to.equal('Plymouth');

//         });
//     });

//   });

//   // Position
//   describe('/api/positions', () => {
//     // Fetch all addresses listed in DB
//     it('Fetches all positions from our db', () => {
//       return request(app) // run mock server
//         .get('/api/positions')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].job_title).to.equal('Digital Developer');
//         });
//     });

//     it('POSTs an address to the database', () => {
//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/positions')
//         .send({
//           address_id: 1,

//           job_title: 'Hair Dresser',
//           occupation_sector: 'Hair'

//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           // chai expect
//           expect(res.body).to.be.an('object');
//           expect(res.body.address_id).to.equal(1);
//           expect(res.body.job_title).to.equal('Hair Dresser');

//         });
//     });

//   });

//   // Contacts
//   describe('/api/adverts', () => {
//     // Fetch all addresses listed in DB
//     it('Fetches all adverts from our db', () => {
//       return request(app) // run mock server
//         .get('/api/adverts')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].advert_ref).to.equal('abc123');
//         });
//     });



//     it('POSTs an advert to the database', () => {
//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/adverts')
//         .send({
//           job_title: 'Chartered Accountent',
//           occupation_sector: 'accounting',
//           address_id: 1,
//           advert_ref: 'XYZ189',
//           contract_type: 'Temporary',
//           full_time: false,
//           date_posted: '2009-04-18',
//           date_applied: '2009-04-25',
//           closing_date: '2009-05-25',
//           advert_url: 'www.google.co.uk',
//           min_salary: '£3',
//           max_salary: '£5',
//           advert_description: 'The quick brown fox jumps over the lazy cow',
//           agency: true,
//           job_board: 'www.lowpaidjobs.com',
//           paid: true

//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           // chai expect
//           console.log(res.body)
//           expect(res.body).to.be.an('object');
//           expect(res.body.position.position_id).to.equal(3);
//           expect(res.body.position.job_title).to.equal('Chartered Accountent')
//           expect(res.body.advert.advert_ref).to.equal('XYZ189');
//           // check date stamp
//           var today = new Date();
//           var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//           expect(res.body.advert.date_seen).to.equal(date + 'T00:00:00.000Z')

//         });
//     });

//   });

//   // Advert
//   describe('/api/contacts', () => {
//     // Fetch all addresses listed in DB
//     it('Fetches all adverts from our db', () => {
//       return request(app) // run mock server
//         .get('/api/contacts')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].contact_name).to.equal('Joe Bloggs');
//         });
//     });

//     it('POSTs an contact to the database', () => {
//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/contacts')
//         .send({
//           address_id: 1,
//           contact_name: 'Gary Hertz',
//           contact_title: 'Radio DJ',
//           contact_position: 'Supervisor',
//           tel_number1: '0123456789',
//           tel_number2: '0198765432',
//           fax: '0135798642',
//           email: 'ghertz@neptuneradio.com',
//           contact_url: 'www.lindein.co.uk/garyhertz',
//           reference: true,
//           date_known: '1995-05-04'
//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           // chai expect
//           expect(res.body).to.be.an('object');
//           expect(res.body.address_id).to.equal(1);
//           expect(res.body.contact_name).to.equal('Gary Hertz');



//         });
//     });

//   });


//   // jobContract
//   describe('/api/contracts', () => {
//     // Fetch all addresses listed in DB
//     it('Fetches all adverts from our db', () => {
//       return request(app) // run mock server
//         .get('/api/contracts')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].job_description).to.equal('Being very busy stacking shelves in Tesco');
//         });
//     });

//     it('POSTs an advert to the database', () => {
//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/contracts')
//         .send({

//           position_id: 1,
//           address_id: 1,
//           contact_id: 1,
//           begin_date: '2011-01-01',
//           end_date: null,
//           salary: '£3',
//           job_description: 'Managing the bake bean aisle',
//           responsibilities: 'Ensuring all tins of baked beans are fresh',
//           notice_period: '6 months',
//           benifits: 'You get to eat the beans',
//           contract_type: 'permanent',
//           full_time: true,
//           paid: true
//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           // chai expect
//           expect(res.body).to.be.an('object');
//           expect(res.body.address_id).to.equal(1);
//           expect(res.body.job_description).to.equal('Managing the bake bean aisle');

//         });
//     });

//   });

//   // Comments
//   describe('/api/comments', () => {
//     // Fetch all addresses listed in DB
//     it('Fetches all comments from our db', () => {
//       return request(app) // run mock server
//         .get('/api/comments')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')

//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].comment).to.equal('I have just been promoted');
//         });
//     });

//     it('POSTs an advert to the database', () => {
//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/comments')
//         .send({

//           position_id: 1,
//           comment: 'Love me tender, love me true, darling I love you'
//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           // chai expect

//           var today = new Date();
//           var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

//           expect(res.body).to.be.an('object');
//           expect(res.body.position_id).to.equal(1);
//           expect(res.body.comment).to.equal('Love me tender, love me true, darling I love you');

//           // Check date stamp has worked
//           expect(res.body.comment_date).to.equal(date + 'T00:00:00.000Z')
//         });
//     });

//   });

//   // Application_Form
//   describe('/api/questions', () => {
//     // Fetch all questions listed in DB
//     it('Fetches all questions from our db', () => {
//       return request(app) // run mock server
//         .get('/api/questions')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')

//           expect(res.body.length).to.equal(1);
//           expect(res.body[0].answer).to.equal('Because of light refraction');
//         });
//     });

//     it('POSTs a question to the database', () => {
//       // runs mock server
//       return request(app)
//         //get request to mock server
//         .post('/api/questions')
//         .send({
//           position_id: 1,
//           question: 'What is the answer to life, the universe and everything?',
//           answer: '42'
//         })
//         // supertest expect  - key on promise object
//         .expect(201)
//         .then(res => {
//           // chai expect

//           expect(res.body).to.be.an('object');
//           expect(res.body.position_id).to.equal(1);
//           expect(res.body.question).to.equal('What is the answer to life, the universe and everything?');
//           expect(res.body.answer).to.equal('42');


//         });
//     });

//   });
// });




