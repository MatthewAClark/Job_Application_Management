const post = {
    companies: {
      company_name: ' Sainsbury\'s Supermarkets Ltd', 
      sector: 'food', 
      industry: 'retail', 
      company_url: 'www.sainsburys.com'
    },
    addresses: {
      company_id: 2,
      line_1: 'Pinhoe Road Store',
      line_2: '1 Hill Barton Road',
      town_city: 'Exeter',
      county_state: 'Devon',
      country: 'uk',
      postcode_zipcode: 'EX1 3PF' 
         
    },
    contacts: {
        address_id: 2,
        contact_name: 'Brian May',
        contact_title: 'Mr',
        contact_position: 'Astronomer',
        tel_number1: '123',
        tel_number2: '456',
        fax: '789',
        email: 'brain.may@stars.com',
        contact_url: 'www.brianmay.com',
        reference: true,
        date_known: '1980-01-01',
        live: true
    },
    personal: {
        user_id: 2,
        contact_id: 2,
        personal_name: 'Freddie Mercury', 
        additional_info: 'mummu mia mummu mia let me go', 
        personal_profile: 'I will not let you go', 
        hobbies_interests: 'Making music', 
        ni_number: 'DE123456H'
    },
    school: {
        contact_id: 2,
        address_id: 4,
        school_name: 'Hogwarts College',
        school_type: '6th form',
        date_from: '2002-09-01',
        date_to: '2004-07-31'
    },
    company_address: {
        company_id: 1,
        address_id: 2
    },
    professions: {

        profession: 'Retail'
        
        },
    positions: {
        profession_id: 1,
        address_id: 2,
        contact_id: 2
    },
    advert: {
        
        position_id: 2,
        address_id: 2,
        contact_id: 2,
        job_title: 'Technical Specialist',
        advert_ref: '114438202',
        contract_type: '',
        full_time: true,
        date_posted: '2019-12-10',
        closing_date: null,
        date_seen: '2019-12-11',
        live: true,
        advert_url: 'https://www.indeed.co.uk/jobs?q=apple&l=cardiff&vjk=76123600350b2485',
        min_salary: '',
        max_salary: '',
        advert_description: 'Do you love how it feels to help others? After customers purchase our products, you’re the one who helps them get more out of their new Apple technology. Your day in the Apple Store is filled with a range of focused support and service tasks. Whether you’re helping customers get started with the Mac or finding answers to their questions about other Apple devices, you’re ready to share knowledge and provide exceptional assistance. You gain satisfaction from bringing resolution and insight to each customer, elevating his or her relationship with Apple to the next level. Both full-time and part-time jobs are available.        Key Qualifications        Ability to assess customers support needs when they arrive, then provide solutions or refer them to other team members        Flexibility to regularly rotate through different technical specialities and skill sets  Ability to thrive on change as products evolve    Description    As a Technical Specialist, you help new owners get started and current ones get quick, efficient support — developing strong, positive relationships with Apple. When a customer needs assistance, you quickly assess their situation. Sometimes you take care of customers with advice or a solution on the spot, using your knowledge of current Apple technology to help with iPod, iPhone and iPad devices. At other times, you refer customers to support team members who get them up and running again. You even provide personal training for new customers, helping them acquire the basic skills they need to get started on photo, video and music projects. The entire store team benefits from your commitment to providing the best care for customers. By helping Apple maintain strong relationships with customers, you are instrumental to our success. Discover even more benefits of doing what you love. Apple’s most important resource, our soul, is our people. Apple benefits help further the well-being of our employees and their families in meaningful ways. No matter where you work at Apple, you can take advantage of our health and wellness resources and time-away programmes. We’re proud to provide stock grants to employees at all levels of the company, and we also give employees the option to buy Apple stock at a discount — both offer everyone at Apple the chance to share in the company’s success. You’ll discover many more benefits of working at Apple, such as programmes that match your charitable contributions, reimburse you for continuing your education and give you special employee pricing on Apple products. Note: Apple benefits programmes vary by country and are subject to eligibility requirements        Additional Requirements        You have excellent time management skills and can make decisions quickly.        You maintain composure and customer focus while troubleshooting and solving issues.        You reassure customers when delivering product diagnoses and potential solutions.        You’re fluent in the local language.',
        agency:  false ,
        job_board: 'indeed',
        paid: true, 
        job_location: 'Cardiff'
    }
    
  }
  
  const get = {
    companies: [{
      company_name: 'Apple', 
      industry: 'Technology'},{
      company_name: 'Samsung',
      industry: 'Technology'
      }],
    addresses: [{
      line_1: 'Apple Store', 
      line_2: 'Princesshay',
      town_city: 'Exeter',
      county_state: 'Devon',
      country: 'uk',
      postcode_zipcode:'EX1 1GE'
      },{
        line_1: '63-66 Grand Arcade', 
        line_2: 'St Davids Dewi Sant',
        town_city: 'Cardiff',
        county_state: '',
        country: 'uk',
        postcode_zipcode:'CF10 2EL'
      },{
        line_1: 'Samsung Experience Store', 
        line_2: '70 Queen St',
        town_city: 'Cardiff',
        county_state: '',
        country: 'uk',
        postcode_zipcode:'CF10 2GQ'
      }],
    contacts: [{
        contact_id: 1, 
        contact_name: 'Joe Bloggs', 
        contact_title: 'Mr', 
        contact_position: 'Managing Director', 
        tel_number1: '01392123455', 
        tel_number2: '0775775777', 
        fax: '0147852369', 
        email: 'joe.bloggs@blogsnet.com', 
        contact_url: 'www.joebloggs.co.uk',
        reference: true,
        date_known: '2005-12-14',
        live: true
    },{
        contact_id: 2, 
        contact_name: 'Freddie Mercury', 
        contact_title: 'Mr', 
        contact_position: 'Rock Start', 
        tel_number1: '0124578963', 
        tel_number2: '0135798642', 
        fax: '', 
        email: 'wewillrocku@queen.com', 
        contact_url: 'www.freddie.com',
        reference: false,
        date_known: '1970-01-01',
        live: false
    }],
    personal: {
        user_id: 1,
        contact_id: 1,
        personal_name: 'Joe Bloggs', 
        additional_info: 'Wake me up when September ends', 
        personal_profile: 'I want to be a scientist', 
        hobbies_interests: 'I like making a mess', 
        ni_number: 'AB123456C'},
    schools: {
        contact_id: 1, 
        address_id: 3, 
        school_name: 'Hargots School', 
        school_type: 'Secondary', 
        date_from: '1997-09-01', 
        date_to: '2002-07-01'
    },
    professions: {
        profession: 'Information Technology'
    }
  }

  module.exports = {get, post};