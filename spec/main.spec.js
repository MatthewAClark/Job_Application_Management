/* eslint-disable no-console*/
console.log('here1')
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');

console.log('here2')

const addNewAdvert = require('../controllers/db.advert').addNewAdvert;



// db API GET request endpoint test

describe('db api endpoints', () => {

  // Companies
  describe('/api/companies', () => {
    // Fetch all companies listed in DB
    it('Fetches all companies from our db', () => {
      return request(app) // run mock server
        .get('/api/companies')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body.length).to.equal(1);
          expect(res.body[0].company_name).to.equal('A Software Company');
        });
    });

    it('POSTs a company to the database', () => {
      // runs mock server
      return request(app)
        //get request to mock server
        .post('/api/companies')
        .send({

         
          company_name: 'Matthew Software Ltd',
          sector: 'Software',
          industry: 'Engineering',
          company_url: 'www.matthewaclark.co.uk'

         
        })
        // supertest expect  - key on promise object
        .expect(201)
        .then(res => {
          // chai expect
          expect(res.body).to.be.an('object');
          expect(res.body.company_id).to.equal(2);
          expect(res.body.company_name).to.equal('Matthew Software Ltd');

        });
    });

  });

  // Addresses
  describe('/api/addresses', () => {
    // Fetch all addresses listed in DB
    it('Fetches all addresses from our db', () => {
      return request(app) // run mock server
        .get('/api/addresses')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body.length).to.equal(1);
          expect(res.body[0].town_city).to.equal('Exeter');
        });
    });

    it('POSTs an address to the database', () => {
      // runs mock server
      return request(app)
        //get request to mock server
        .post('/api/addresses')
        .send({
          company_id: 1,
          line_1: '1234 Another Road',
          line_2: 'Another Suburb',
          town_city: 'Plymouth',
          county_state: 'Devon',
          country: 'UK',
          postcode_zipcode: 'PL1 1PL',        
                
        })
        // supertest expect  - key on promise object
        .expect(201)
        .then(res => {
          // chai expect
          expect(res.body).to.be.an('object');
          expect(res.body.address_id).to.equal(2);
          expect(res.body.town_city).to.equal('Plymouth');

        });
    });

  });

  // Position
  describe('/api/positions', () => {
    // Fetch all addresses listed in DB
    it('Fetches all positions from our db', () => {
      return request(app) // run mock server
        .get('/api/positions')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body.length).to.equal(1);
          expect(res.body[0].job_title).to.equal('Digital Developer');
        });
    });

    it('POSTs an address to the database', () => {
      // runs mock server
      return request(app)
        //get request to mock server
        .post('/api/positions')
        .send({
          address_id: 1,
         
          job_title: 'Hair Dresser',
          occupation_sector: 'Hair'     
                
        })
        // supertest expect  - key on promise object
        .expect(201)
        .then(res => {
          // chai expect
          expect(res.body).to.be.an('object');
          expect(res.body.address_id).to.equal(1);
          expect(res.body.job_title).to.equal('Hair Dresser');

        });
    });

  });

    // Contacts
    describe('/api/adverts', () => {
      // Fetch all addresses listed in DB
      it('Fetches all adverts from our db', () => {
        return request(app) // run mock server
          .get('/api/adverts')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array')
            expect(res.body.length).to.equal(1);
            expect(res.body[0].advert_ref).to.equal('abc123');
          });
      });
  
     

      it('POSTs an advert to the database', () => {
        // runs mock server
        return request(app)
          //get request to mock server
          .post('/api/adverts')
          .send({
            job_title: 'Chartered Accountent',
            occupation_sector: 'accounting',
            address_id: 1,
            advert_ref: 'XYZ189',
            contract_type: 'Temporary',
            full_time: false,
            date_posted: '2009-04-18',
            date_applied: '2009-04-25',
            closing_date: '2009-05-25',
            advert_url: 'www.google.co.uk',
            min_salary: '£3',
            max_salary: '£5',
            advert_description: 'The quick brown fox jumps over the lazy cow',
            agency: true,
            job_board: 'www.lowpaidjobs.com',
            paid: true
             
          })
          // supertest expect  - key on promise object
          .expect(201)
          .then(res => {
            // chai expect
            console.log(res.body)
            expect(res.body).to.be.an('object');
            expect(res.body.position.position_id).to.equal(3);
            expect(res.body.position.job_title).to.equal('Chartered Accountent')
            expect(res.body.advert.advert_ref).to.equal('XYZ189');
          // check date stamp
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
             expect(res.body.advert.date_seen).to.equal(date+'T00:00:00.000Z')
        
          });
      });
  
    });

      // Advert
      describe('/api/contacts', () => {
        // Fetch all addresses listed in DB
        it('Fetches all adverts from our db', () => {
          return request(app) // run mock server
            .get('/api/contacts')
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array')
              expect(res.body.length).to.equal(1);
              expect(res.body[0].contact_name).to.equal('Joe Bloggs');
            });
        });
    
        it('POSTs an contact to the database', () => {
          // runs mock server
          return request(app)
            //get request to mock server
            .post('/api/contacts')
            .send({      
              address_id: 1,
              contact_name: 'Gary Hertz',
              contact_title: 'Radio DJ',
              contact_position: 'Supervisor',
              tel_number1: '0123456789',
              tel_number2: '0198765432',
              fax: '0135798642',
              email: 'ghertz@neptuneradio.com',
              contact_url: 'www.lindein.co.uk/garyhertz',
              reference: true,
              date_known: '1995-05-04'               
            })
            // supertest expect  - key on promise object
            .expect(201)
            .then(res => {
              // chai expect
              expect(res.body).to.be.an('object');
              expect(res.body.address_id).to.equal(1);
              expect(res.body.contact_name).to.equal('Gary Hertz');


          
            });
        });
    
      });

      
      // jobContract
      describe('/api/contracts', () => {
        // Fetch all addresses listed in DB
        it('Fetches all adverts from our db', () => {
          return request(app) // run mock server
            .get('/api/contracts')
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array')
              expect(res.body.length).to.equal(1);
              expect(res.body[0].job_description).to.equal('Being very busy stacking shelves in Tesco');
            });
        });
    
        it('POSTs an advert to the database', () => {
          // runs mock server
          return request(app)
            //get request to mock server
            .post('/api/contracts')
            .send({      
             
    position_id: 1,
    address_id: 1,
    contact_id: 1,
    begin_date: '2011-01-01',
    end_date: null,
    salary: '£3',
    job_description: 'Managing the bake bean aisle',
    responsibilities: 'Ensuring all tins of baked beans are fresh',
    notice_period: '6 months',
    benifits: 'You get to eat the beans',
    contract_type: 'permanent',
    full_time: true,
    paid: true           
            })
            // supertest expect  - key on promise object
            .expect(201)
            .then(res => {
              // chai expect
              expect(res.body).to.be.an('object');
              expect(res.body.address_id).to.equal(1);
              expect(res.body.job_description).to.equal('Managing the bake bean aisle');
          
            });
        });
    
      });

      // Comments
      describe('/api/comments', () => {
        // Fetch all addresses listed in DB
        it('Fetches all comments from our db', () => {
          return request(app) // run mock server
            .get('/api/comments')
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array')
            
              expect(res.body.length).to.equal(1);
              expect(res.body[0].comment).to.equal('I have just been promoted');
            });
        });
    
        it('POSTs an advert to the database', () => {
          // runs mock server
          return request(app)
            //get request to mock server
            .post('/api/comments')
            .send({      
             
    position_id: 1,
    comment: 'Love me tender, love me true, darling I love you'           
            })
            // supertest expect  - key on promise object
            .expect(201)
            .then(res => {
              // chai expect

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              
              expect(res.body).to.be.an('object');
              expect(res.body.position_id).to.equal(1);
              expect(res.body.comment).to.equal('Love me tender, love me true, darling I love you');
          
              // Check date stamp has worked
              expect(res.body.comment_date).to.equal(date + 'T00:00:00.000Z')
            });
        });
    
      });

       // Application_Form
       describe('/api/questions', () => {
        // Fetch all questions listed in DB
        it('Fetches all questions from our db', () => {
          return request(app) // run mock server
            .get('/api/questions')
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array')
            
              expect(res.body.length).to.equal(1);
              expect(res.body[0].answer).to.equal('Because of light refraction');
            });
        });
    
        it('POSTs a question to the database', () => {
          // runs mock server
          return request(app)
            //get request to mock server
            .post('/api/questions')
            .send({      
    position_id: 1,
    question: 'What is the answer to life, the universe and everything?',
    answer: '42'           
            })
            // supertest expect  - key on promise object
            .expect(201)
            .then(res => {
              // chai expect
              
              expect(res.body).to.be.an('object');
              expect(res.body.position_id).to.equal(1);
              expect(res.body.question).to.equal('What is the answer to life, the universe and everything?');
              expect(res.body.answer).to.equal('42');
          
          
            });
        });
    
      });
});




